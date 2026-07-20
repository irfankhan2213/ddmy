import { getSupabaseClient } from './client'
import { products as fallbackProducts, Product } from '@/data/products'

export interface OrderInput {
  customer_name: string
  customer_phone: string
  delivery_address: string
  city: string
  pincode: string
  subtotal: number
  shipping: number
  total: number
}

export interface OrderItemInput {
  product_id?: string
  product_name: string
  flavor?: string
  quantity: number
  price: number
}

/**
 * Fetch all products from Supabase database with automatic fallback to static products.
 */
export async function fetchProductsFromDb(): Promise<Product[]> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return fallbackProducts
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error || !data || data.length === 0) {
      console.warn('Supabase products query failed or empty, using local fallback:', error?.message)
      return fallbackProducts
    }

    return data.map(item => ({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      salePrice: item.sale_price ? Number(item.sale_price) : undefined,
      rating: Number(item.rating),
      reviewCount: item.review_count,
      badge: item.badge || undefined,
      category: item.category,
      href: item.href || `/products/${item.id}`,
      accent: item.accent || '#C9A84C',
      image: item.image,
      description: item.description || '',
      flavors: item.flavors || undefined,
      features: item.features || undefined,
    }))
  } catch (err) {
    console.error('Error fetching products from Supabase:', err)
    return fallbackProducts
  }
}

/**
 * Fetch single product by ID
 */
export async function fetchProductByIdFromDb(id: string): Promise<Product | undefined> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    return fallbackProducts.find(p => p.id === id)
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) {
      return fallbackProducts.find(p => p.id === id)
    }

    return {
      id: data.id,
      name: data.name,
      price: Number(data.price),
      salePrice: data.sale_price ? Number(data.sale_price) : undefined,
      rating: Number(data.rating),
      reviewCount: data.review_count,
      badge: data.badge || undefined,
      category: data.category,
      href: data.href || `/products/${data.id}`,
      accent: data.accent || '#C9A84C',
      image: data.image,
      description: data.description || '',
      flavors: data.flavors || undefined,
      features: data.features || undefined,
    }
  } catch (err) {
    return fallbackProducts.find(p => p.id === id)
  }
}

/**
 * Create order and order_items in Supabase
 */
export async function createOrderInDb(
  order: OrderInput,
  items: OrderItemInput[]
): Promise<{ success: boolean; orderId?: string; error?: string }> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    console.log('[Supabase Demo Mode] Order captured locally:', { order, items })
    return { success: true, orderId: `demo-${Date.now()}` }
  }

  try {
    // 1. Insert Order
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: order.customer_name,
        customer_phone: order.customer_phone,
        delivery_address: order.delivery_address,
        city: order.city,
        pincode: order.pincode,
        subtotal: order.subtotal,
        shipping: order.shipping,
        total: order.total,
        status: 'pending',
      })
      .select('id')
      .single()

    if (orderError || !orderData) {
      console.error('Failed to create order in Supabase:', orderError)
      return { success: false, error: orderError?.message || 'Failed to save order' }
    }

    const orderId = orderData.id

    // 2. Insert Order Items
    const formattedItems = items.map(item => ({
      order_id: orderId,
      product_id: item.product_id || null,
      product_name: item.product_name,
      flavor: item.flavor || null,
      quantity: item.quantity,
      price: item.price,
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(formattedItems)

    if (itemsError) {
      console.error('Failed to create order items in Supabase:', itemsError)
    }

    return { success: true, orderId }
  } catch (err: any) {
    console.error('Exception creating order:', err)
    return { success: false, error: err?.message || 'Unknown error occurred' }
  }
}

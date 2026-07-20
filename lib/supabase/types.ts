export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image: string | null
          created_at: string
        }
        Insert: {
          id: string
          name: string
          slug: string
          description?: string | null
          image?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          image?: string | null
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          price: number
          sale_price: number | null
          rating: number
          review_count: number
          badge: string | null
          category: string
          category_id: string | null
          href: string | null
          accent: string
          image: string
          description: string | null
          flavors: string[] | null
          features: string[] | null
          in_stock: boolean
          created_at: string
        }
        Insert: {
          id: string
          name: string
          price: number
          sale_price?: number | null
          rating?: number
          review_count?: number
          badge?: string | null
          category: string
          category_id?: string | null
          href?: string | null
          accent?: string
          image: string
          description?: string | null
          flavors?: string[] | null
          features?: string[] | null
          in_stock?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          sale_price?: number | null
          rating?: number
          review_count?: number
          badge?: string | null
          category?: string
          category_id?: string | null
          href?: string | null
          accent?: string
          image?: string
          description?: string | null
          flavors?: string[] | null
          features?: string[] | null
          in_stock?: boolean
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          customer_name: string
          customer_phone: string
          delivery_address: string
          city: string
          pincode: string
          subtotal: number
          shipping: number
          total: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          customer_name: string
          customer_phone: string
          delivery_address: string
          city: string
          pincode: string
          subtotal: number
          shipping?: number
          total: number
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          customer_name?: string
          customer_phone?: string
          delivery_address?: string
          city?: string
          pincode?: string
          subtotal?: number
          shipping?: number
          total?: number
          status?: string
          created_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          product_name: string
          flavor: string | null
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          product_name: string
          flavor?: string | null
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string | null
          product_name?: string
          flavor?: string | null
          quantity?: number
          price?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          product_id: string | null
          user_name: string
          rating: number
          comment: string
          verified_purchase: boolean
          created_at: string
        }
        Insert: {
          id?: string
          product_id?: string | null
          user_name: string
          rating: number
          comment: string
          verified_purchase?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string | null
          user_name?: string
          rating?: number
          comment?: string
          verified_purchase?: boolean
          created_at?: string
        }
      }
    }
  }
}

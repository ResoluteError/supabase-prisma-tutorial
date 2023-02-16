export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _LikedPosts: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      comment: {
        Row: {
          createdAt: string
          creatorId: string
          id: string
          postId: string
          text: string
        }
        Insert: {
          createdAt?: string
          creatorId: string
          id?: string
          postId: string
          text: string
        }
        Update: {
          createdAt?: string
          creatorId?: string
          id?: string
          postId?: string
          text?: string
        }
      }
      post: {
        Row: {
          authorId: string
          createdAt: string
          id: string
          text: string
          title: string
        }
        Insert: {
          authorId: string
          createdAt?: string
          id?: string
          text: string
          title: string
        }
        Update: {
          authorId?: string
          createdAt?: string
          id?: string
          text?: string
          title?: string
        }
      }
      user: {
        Row: {
          email: string
          id: string
          name: string
        }
        Insert: {
          email: string
          id?: string
          name: string
        }
        Update: {
          email?: string
          id?: string
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}


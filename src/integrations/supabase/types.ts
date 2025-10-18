export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          appointment_time: string
          created_at: string | null
          doctor_id: string
          id: string
          notes: string | null
          patient_id: string
          purpose: string | null
          specialty: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          created_at?: string | null
          doctor_id: string
          id?: string
          notes?: string | null
          patient_id: string
          purpose?: string | null
          specialty?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          created_at?: string | null
          doctor_id?: string
          id?: string
          notes?: string | null
          patient_id?: string
          purpose?: string | null
          specialty?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      blood_donations: {
        Row: {
          available_date: string
          blood_type: string
          city: string
          created_at: string | null
          donor_id: string
          donor_name: string
          id: string
          phone: string
          status: string | null
          units_available: number
        }
        Insert: {
          available_date: string
          blood_type: string
          city: string
          created_at?: string | null
          donor_id: string
          donor_name: string
          id?: string
          phone: string
          status?: string | null
          units_available: number
        }
        Update: {
          available_date?: string
          blood_type?: string
          city?: string
          created_at?: string | null
          donor_id?: string
          donor_name?: string
          id?: string
          phone?: string
          status?: string | null
          units_available?: number
        }
        Relationships: []
      }
      blood_requests: {
        Row: {
          blood_type: string
          contact: string
          created_at: string | null
          hospital_id: string | null
          id: string
          patient_name: string
          required_by: string
          status: string | null
          units_needed: number
          updated_at: string | null
          urgency: string
        }
        Insert: {
          blood_type: string
          contact: string
          created_at?: string | null
          hospital_id?: string | null
          id?: string
          patient_name: string
          required_by: string
          status?: string | null
          units_needed: number
          updated_at?: string | null
          urgency: string
        }
        Update: {
          blood_type?: string
          contact?: string
          created_at?: string | null
          hospital_id?: string | null
          id?: string
          patient_name?: string
          required_by?: string
          status?: string | null
          units_needed?: number
          updated_at?: string | null
          urgency?: string
        }
        Relationships: [
          {
            foreignKeyName: "blood_requests_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospitals"
            referencedColumns: ["id"]
          },
        ]
      }
      doctors: {
        Row: {
          availability: string | null
          bio: string | null
          created_at: string | null
          degrees: string | null
          email: string
          full_name: string
          hospital_id: string | null
          id: string
          image_url: string | null
          license_number: string
          medical_school: string | null
          phone: string
          specialty: string
          status: string | null
          updated_at: string | null
          user_id: string | null
          years_experience: number
        }
        Insert: {
          availability?: string | null
          bio?: string | null
          created_at?: string | null
          degrees?: string | null
          email: string
          full_name: string
          hospital_id?: string | null
          id?: string
          image_url?: string | null
          license_number: string
          medical_school?: string | null
          phone: string
          specialty: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          years_experience: number
        }
        Update: {
          availability?: string | null
          bio?: string | null
          created_at?: string | null
          degrees?: string | null
          email?: string
          full_name?: string
          hospital_id?: string | null
          id?: string
          image_url?: string | null
          license_number?: string
          medical_school?: string | null
          phone?: string
          specialty?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          years_experience?: number
        }
        Relationships: [
          {
            foreignKeyName: "doctors_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospitals"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          document_name: string
          document_type: string
          file_size: number | null
          file_url: string
          id: string
          patient_id: string
          uploaded_at: string | null
        }
        Insert: {
          document_name: string
          document_type: string
          file_size?: number | null
          file_url: string
          id?: string
          patient_id: string
          uploaded_at?: string | null
        }
        Update: {
          document_name?: string
          document_type?: string
          file_size?: number | null
          file_url?: string
          id?: string
          patient_id?: string
          uploaded_at?: string | null
        }
        Relationships: []
      }
      health_tracking: {
        Row: {
          id: string
          metric_type: string
          metric_value: number
          notes: string | null
          patient_id: string
          recorded_at: string | null
          unit: string
        }
        Insert: {
          id?: string
          metric_type: string
          metric_value: number
          notes?: string | null
          patient_id: string
          recorded_at?: string | null
          unit: string
        }
        Update: {
          id?: string
          metric_type?: string
          metric_value?: number
          notes?: string | null
          patient_id?: string
          recorded_at?: string | null
          unit?: string
        }
        Relationships: []
      }
      hospitals: {
        Row: {
          address: string
          city: string
          created_at: string | null
          email: string
          emergency_available: boolean | null
          id: string
          name: string
          phone: string
          services: string[] | null
          updated_at: string | null
        }
        Insert: {
          address: string
          city: string
          created_at?: string | null
          email: string
          emergency_available?: boolean | null
          id?: string
          name: string
          phone: string
          services?: string[] | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          city?: string
          created_at?: string | null
          email?: string
          emergency_available?: boolean | null
          id?: string
          name?: string
          phone?: string
          services?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      medical_records: {
        Row: {
          created_at: string | null
          description: string | null
          doctor_id: string | null
          file_url: string | null
          id: string
          patient_id: string
          record_date: string | null
          record_type: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          doctor_id?: string | null
          file_url?: string | null
          id?: string
          patient_id: string
          record_date?: string | null
          record_type: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          doctor_id?: string | null
          file_url?: string | null
          id?: string
          patient_id?: string
          record_date?: string | null
          record_type?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "medical_records_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          title: string
          type: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          title: string
          type?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      organ_donations: {
        Row: {
          age: number
          blood_type: string
          city: string
          created_at: string | null
          donor_id: string
          donor_name: string
          id: string
          organ_type: string
          phone: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          age: number
          blood_type: string
          city: string
          created_at?: string | null
          donor_id: string
          donor_name: string
          id?: string
          organ_type: string
          phone: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number
          blood_type?: string
          city?: string
          created_at?: string | null
          donor_id?: string
          donor_name?: string
          id?: string
          organ_type?: string
          phone?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      organ_requests: {
        Row: {
          age: number
          blood_type: string
          contact: string
          created_at: string | null
          hospital_id: string | null
          id: string
          organ_type: string
          patient_name: string
          status: string | null
          updated_at: string | null
          urgency: string
        }
        Insert: {
          age: number
          blood_type: string
          contact: string
          created_at?: string | null
          hospital_id?: string | null
          id?: string
          organ_type: string
          patient_name: string
          status?: string | null
          updated_at?: string | null
          urgency: string
        }
        Update: {
          age?: number
          blood_type?: string
          contact?: string
          created_at?: string | null
          hospital_id?: string | null
          id?: string
          organ_type?: string
          patient_name?: string
          status?: string | null
          updated_at?: string | null
          urgency?: string
        }
        Relationships: [
          {
            foreignKeyName: "organ_requests_hospital_id_fkey"
            columns: ["hospital_id"]
            isOneToOne: false
            referencedRelation: "hospitals"
            referencedColumns: ["id"]
          },
        ]
      }
      prescriptions: {
        Row: {
          created_at: string | null
          doctor_id: string
          dosage: string
          duration: string
          frequency: string
          id: string
          instructions: string | null
          medication_name: string
          patient_id: string
          prescribed_date: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          doctor_id: string
          dosage: string
          duration: string
          frequency: string
          id?: string
          instructions?: string | null
          medication_name: string
          patient_id: string
          prescribed_date?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          doctor_id?: string
          dosage?: string
          duration?: string
          frequency?: string
          id?: string
          instructions?: string | null
          medication_name?: string
          patient_id?: string
          prescribed_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          blood_type: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string | null
          full_name: string | null
          gender: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          blood_type?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          blood_type?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      test_results: {
        Row: {
          created_at: string | null
          file_url: string | null
          id: string
          notes: string | null
          patient_id: string
          reference_range: string | null
          result_value: string | null
          status: string | null
          test_date: string | null
          test_name: string
          test_type: string
        }
        Insert: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          reference_range?: string | null
          result_value?: string | null
          status?: string | null
          test_date?: string | null
          test_name: string
          test_type: string
        }
        Update: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          reference_range?: string | null
          result_value?: string | null
          status?: string | null
          test_date?: string | null
          test_name?: string
          test_type?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "doctor" | "patient"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "doctor", "patient"],
    },
  },
} as const

'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

interface SignUpFormProps {
  email: string;
  password: string;
  phone: string;
  name: string;
}

export async function signup(formData: SignUpFormProps) {
  const supabase = await createClient()

  const data = {
    email: formData.email,
    password: formData.password,
    name: formData.name,
    phone: formData.phone,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
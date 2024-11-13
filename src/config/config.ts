import dotenv from 'dotenv';

dotenv.config();

export const PORT:number= Number(process.env.PORT) || 4000;
export const MONGODB_URI = String(process.env.MONGODB_URI) ;
export const firebase = String(process.env.firebase) ;
export const supabaseUrl = String(process.env.SUPABASE_URL) ;
export const supabaseKey = String(process.env.SUPABASE_KEY) ;
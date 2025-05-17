// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ijrwrtazrgmbpauodqlv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcndydGF6cmdtYnBhdW9kcWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0Mzg1NjcsImV4cCI6MjA2MzAxNDU2N30.MdgUHX2epasjQl7TA6da4mTsqcrH2lgYI-1_-pfahYQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
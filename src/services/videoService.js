import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://bregpgndghawxhsznwzo.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZWdwZ25kZ2hhd3hoc3pud3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNzg4OTQsImV4cCI6MTk4Mzk1NDg5NH0.QJmlJv-ELCadyLZC2lMc5MRD-yadb9lKqxrrSDFDhe0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
        }
    }
}
import { createClient } from "~~/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <ul>
      {notes && notes.length > 0 ? (
        notes.map((note, index) => (
          <li key={index}>
            <strong>Title:</strong> {note.title} <br />
          </li>
        ))
      ) : (
        <li>No notes available</li>
      )}
    </ul>
  );
}

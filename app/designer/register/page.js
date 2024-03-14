import { addDesignerWithImage } from "../../_utils/designers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function registerPage() {
  async function createTask(formData) {
    "use server";
    await addDesignerWithImage(formData);
    redirect("/designer");
  }

  return (
    <article>
      <h2>desiner register</h2>
      <Link href="/designer">toList</Link>
      <div className="container">
        <form action={createTask}>
          <label>name</label>
          <input type="text" name="name" />
          <input type="file" name="image" />
          <button type="submit">register</button>
        </form>
      </div>
    </article>
  );
}

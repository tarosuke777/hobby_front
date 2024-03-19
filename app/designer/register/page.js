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
          <div>
            <label>name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>externalLink</label>
            <input type="text" name="external_link" />
          </div>
          <div>
            <label>sampleImage</label>
            <input type="file" name="image" />
          </div>
          <button type="submit">register</button>
        </form>
      </div>
    </article>
  );
}

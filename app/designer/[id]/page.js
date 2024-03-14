import Link from "next/link";
import {
  getDesigner,
  modifyDesigner,
  modifyDesignerWithImage,
} from "../../_utils/designers";
import { redirect } from "next/navigation";

export default async function DesignerIdPage({ params }) {
  const { id } = params;

  const designer = await getDesigner(id);

  async function createTask(formData) {
    "use server";
    // const id = await formData.get("id");
    // const name = await formData.get("name");
    // await modifyDesigner(id, name);
    await modifyDesignerWithImage(formData);
    redirect("/designer");
  }

  return (
    <article>
      <h2>desiner</h2>
      <Link href="/designer">toList</Link>
      <div className="container">
        <form action={createTask}>
          <label>name</label>
          <input type="text" name="id" defaultValue={designer.id} />
          <input type="text" name="name" defaultValue={designer.name} />
          <input type="file" name="image" />
          <button type="submit">modify</button>
        </form>
      </div>
    </article>
  );
}

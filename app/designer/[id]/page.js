import Link from "next/link";
import { getDesigner, modifyDesignerWithImage } from "../../_utils/designers";
import { redirect } from "next/navigation";
import Modal from "../modal";

export default async function DesignerIdPage({ params }) {
  const { id } = params;

  const designer = await getDesigner(id);

  async function createTask(formData) {
    "use server";
    await modifyDesignerWithImage(formData);
    redirect("/designer");
  }

  return (
    <article>
      <h2>desiner</h2>
      <Link href="/designer">toList</Link>
      <div className="container">
        <form action={createTask}>
          <div>
            <label>id</label>
            <input type="text" name="id" defaultValue={designer.id} />
          </div>
          <div>
            <label>name</label>
            <input type="text" name="name" defaultValue={designer.name} />
          </div>
          <div>
            <label>sampleImage</label>
            <input type="file" name="image" />
          </div>
          <div>
            <label>currentSampleImage</label>
            <Modal image_url={designer.image_url} />
          </div>
          <button type="submit">modify</button>
        </form>
      </div>
    </article>
  );
}

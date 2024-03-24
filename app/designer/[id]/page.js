import Link from "next/link";
import { getDesigner, modifyDesignerWithImage } from "../../_utils/designers";
import { redirect } from "next/navigation";
import Modal from "../modal";

export default async function DesignerIdPage({ params }) {
  const { id } = params;

  const designer = await getDesigner(id);

  async function createTask(formData) {
    "use server";
    const sendFormData = new FormData();
    sendFormData.append("id", formData.get("id"));
    sendFormData.append("name", formData.get("name"));
    sendFormData.append("external_link", formData.get("external_link"));

    if (formData.get("image_delete") == "on") {
      sendFormData.append("image_delete", formData.get("image_delete"));
    }

    if (formData.get("image").size != 0) {
      sendFormData.append("image", formData.get("image"));
    }

    // await modifyDesignerWithImage(sendFormData);
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
            <input type="text" name="id" defaultValue={designer.id} readOnly />
          </div>
          <div>
            <label>name</label>
            <input type="text" name="name" defaultValue={designer.name} />
          </div>
          <div>
            <label>externalLink</label>
            <input
              type="text"
              name="external_link"
              defaultValue={designer.external_link}
            />
          </div>
          <div>
            <label>sampleImage</label>
            <input type="file" name="image" />
          </div>
          <div>
            <label>currentSampleImage</label>
            <input type="checkbox" name="image_delete" />
            <Modal image_url={designer.image_url} />
          </div>
          <button type="submit">modify</button>
        </form>
      </div>
    </article>
  );
}

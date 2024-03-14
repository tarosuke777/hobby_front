import { deleteDesigner, getDesigners } from "../_utils/designers";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import Modal from "./modal";
import "./page.module.css";

export default async function designerPage() {
  const designers = await getDesigners();

  async function deleteTask(formData) {
    "use server";
    const id = await formData.get("id");
    await deleteDesigner(id);
    revalidatePath("/designer");
  }

  return (
    <article>
      <h2>designers</h2>
      <Link href="/designer/register">register</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>externalLink</th>
            <th>sampleDesign</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {designers.map((designer) => (
            <tr key={designer.id}>
              <td>{designer.id}</td>
              <td>
                <Link href={`/designer/${designer.id}`}>{designer.name}</Link>
              </td>
              <td>
                <a href={designer.name} target="_brank">
                  {designer.name}
                </a>
              </td>
              <td>
                <Modal image_url={designer.image_url} />
              </td>
              <td>
                <form action={deleteTask}>
                  <input type="hidden" name="id" value={designer.id} />
                  <button type="submit">delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

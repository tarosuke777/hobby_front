export async function getDesigners() {
  const res = await fetch("http://localhost:3001/designers.json", {
    cache: "no-store",
  });
  return await res.json();
}

export async function getDesigner(id) {
  const res = await fetch(`http://localhost:3001/designers/${id}/`, {
    cache: "no-store",
  });
  return await res.json();
}

export function addDesigner(name) {
  return fetch("http://localhost:3001/designers", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
}

export function addDesignerWithImage(formData) {
  return fetch("http://localhost:3001/designers", {
    method: "POST",
    body: formData,
  });
}

export function modifyDesigner(id, name) {
  return fetch(`http://localhost:3001/designers/${id}/`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
}

export function modifyDesignerWithImage(formData) {
  const id = formData.get("id");
  return fetch(`http://localhost:3001/designers/${id}/`, {
    method: "PUT",
    body: formData,
  });
}

export function deleteDesigner(id) {
  return fetch(`http://localhost:3001/designers/${id}/`, {
    method: "DELETE",
  });
}

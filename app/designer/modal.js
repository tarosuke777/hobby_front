"use client";
import styles from "./modal.module.css";
import Image from "next/image";
import React, { useState } from "react";

export default function Modal(props) {
  if (props.image_url == null) {
    return <></>;
  }

  const [modal, setModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <a href="#" onClick={openModal}>
        <Image src={props.image_url} width={50} height={50} alt="" />
      </a>
      <div
        onClick={closeModal}
        className={`${styles.overlay} ${modal ? styles.isOpened : ""}`}
      >
        <img src={props.image_url} />
      </div>
    </>
  );
}

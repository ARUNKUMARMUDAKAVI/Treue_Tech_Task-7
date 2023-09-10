import React from "react";
import { Header } from "../Header/Header";
import imag from "../images/img.jpg";
import Styles from "../Home/Home.module.css";

export const Home = () => {
  return (
    <>
      <Header/>
      <section className={Styles.container}>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          dolor quaerat dolorum iusto at. Laborum accusamus ex alias quod! Porro
          dolore eos iusto quia sed consectetur dolores reprehenderit
          accusantium sit reiciendis nihil ipsa blanditiis voluptatem
          voluptatum, praesentium officiis, tempora voluptates repellat. <br/> <br/>Maxime
          inventore atque labore doloremque dolores odit temporibus vitae error?
          Atque eius laudantium, eaque ex unde corporis minus ipsa.
        </span>
        <img src={imag} alt="pho" />
      </section>
    </>
  );
};

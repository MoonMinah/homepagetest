import React, { ChangeEvent, FormEvent, useState } from "react";
import SectionTitle from "../components/SectionTitle";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_jb9robs", //service_id
        "template_st90n9d", //template_id
        formData, //폼요소
        "h6uP6ziNIWuxf0EnY" //public_key
      )
      .then(
        (result) => {
          alert("메일이 전송되었습니다!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("메일 전송이 실패하였습니다." + error.text);
        }
      );
  };

  return (
    <div className="main contact">
      <div className="content-inner">
        <SectionTitle title="Contact Us" />
        <div className="contact-wrap">
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="이름"
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="이메일"
                onChange={handleChange}
              />
            </p>
            <p>
              <textarea
                name="message"
                value={formData.message}
                placeholder="메세지를 입력하세요"
                onChange={handleChange}
              ></textarea>
            </p>
            <button>전송</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

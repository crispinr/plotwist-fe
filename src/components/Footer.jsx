import React from "react";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <section className="fixed-bottom p-2 text-muted text-center">
        <h6>© {currentYear} License Reserved</h6>
      </section>
    </>
  );
}

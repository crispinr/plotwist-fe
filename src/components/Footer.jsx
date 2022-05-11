export default function Footer (){
    const date = new Date();
    const currentYear = date.getFullYear();
    return(
        <>
        <section className="foot">
        <div className="px-5">
          <div className="" style={{ height: "30px" }}>
          <div className="text-center text-muted d-flex flex-column flex-md-row  justify-content-between align-items-center my-3 mx-md-3  ml-md-4 ml-lg-0">
          <p className="mx-auto txt">
            © {currentYear} License Reserved
          </p>
          </div>
          </div>
        </div>
      </section>
      </>
    )
}
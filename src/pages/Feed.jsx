import BaseLayout from "../components/BaseLayout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { BiUserCircle, BiMessageRounded } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";

export default function Feed() {
  return (
    <>
      <BaseLayout>
        <section className="container d-flex justify-content-center align-items-center mt-3">
          <div className="w-50">
            <div className="w-50 d-flex justify-content-between align-items-center pe-md-5 mb-3">
              <h6>Relevant</h6>
              <h6>Latest</h6>
              <h6>Top</h6>
            </div>
            <div>
              <Card className="custom-card-bg">
                <CardMedia
                  component="img"
                  height="140"
                  image="https://pbs.twimg.com/media/DfsPxhVVAAAOSS-.png"
                  alt="green iguana"
                />
                <CardContent className="custom-card-bg">
                  <div className="d-flex justify-content-start align-items-center">
                    <BiUserCircle size="40px" className="align-self-start" />
                    <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                      <h6 className="m-0">John Doe</h6>
                      <p className="text-muted small-words m-0">
                        May 10 (6 mins ago)
                      </p>
                      <div className="my-3">
                        <h4 className="fw-bold">The Alchemist - Plot</h4>
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div className="d-flex">
                          <span className="d-flex">
                            <FaFireAlt size="20px" className="opacity-75" />
                            <p className="text-muted my-0 ms-1">12</p>
                          </span>
                          <span className="d-flex ms-3">
                            <BiMessageRounded
                              size="20px"
                              className="opacity-75"
                            />
                            <p className="text-muted my-0 ms-1">12</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </BaseLayout>
    </>
  );
}

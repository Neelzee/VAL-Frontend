import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiRoot } from "../utils/consts";
import { RenderPollTiny, RenderPollView } from "../components/render_poll";
import { defaultPoll, isPollOpen, pollExamples } from "../utils/funcs";
import { Poll } from "../utils/types";
import { Footer } from "../components/footer";

export function ViewPoll() {
  const { id } = useParams<{ id: string }>();
  const [poll, setPoll] = useState(defaultPoll());

  useEffect(() => {
    let config = {
      headers: {},
    };
    axios
      .get(ApiRoot(`polls/${id}`), config)
      .then((res) => {
        console.log(res);
        setPoll(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [id]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <h1>View poll</h1>
      <RenderPollView poll={poll} />
      <Footer />
    </>
  );
}
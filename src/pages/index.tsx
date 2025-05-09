import { JSX } from "react";
import { Pages, useNav } from "@/utils/storage";

import Main from "@/components/Main";
import About from "@/components/About";
import Support from "@/components/Support";
import Mining from "@/components/Mining";

export default function Home() {

  const { nav } = useNav()

  const pages: Record<Pages, JSX.Element> = {
    home: <Main />,
    about: <About />,
    support: <Support />,
    mining: <Mining />,
  }

  return pages[nav]
}

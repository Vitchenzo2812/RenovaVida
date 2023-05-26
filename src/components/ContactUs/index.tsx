import { useEffect, useReducer } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { THEME } from "../../styles/Theme";
import Link from "next/link";
import * as S from "./styled";

type ReducerProps = {
  icon: string;
};

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
    transform: ["translateY(10rem)", "translateY(0)"],
  },
  hidden: { opacity: 0, scale: 0 },
};

function reducer(state: string, action: ReducerProps) {
  switch (action.icon) {
    case "email":
      return "mailto:institutorenovavida@gmail.com";

    case "whatsapp":
      return "https://api.whatsapp.com/send?phone=11917447494";

    case "instagram":
      return "https://instagram.com/institutorenovavida/";

    case "facebook":
      return "https://facebook.com/renovavidainstituto";

    default:
      return "";
  }
}

const initialState = "";

export default function ContactUs() {
  const contactIcons = ["/email.svg", "/whatsapp.svg", "/instagram.svg", "/facebook.svg"];
  const [state, dispatch] = useReducer(reducer, initialState);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <S.Container id="contato">
      <S.MotionDiv ref={ref} animate={controls} initial="hidden" variants={variants}>
        <S.Title>Onde nos encontrar</S.Title>
      </S.MotionDiv>

      <S.ContainerAllComponents>
        <S.MotionDiv ref={ref} animate={controls} initial="hidden" variants={variants}>
          <S.ContainerTexts>
            <S.WrapperText>
              <S.Text color={THEME.WHITE} size={4} weight={700}>
                Sede da instituição:
              </S.Text>
              <S.Text color={THEME.WHITE} size={3}>
                Unidade Freguesia do Ó <br />
                Rua Prof. João Machado, 824
              </S.Text>
            </S.WrapperText>

            <S.WrapperText>
              <S.Text color={THEME.WHITE} size={4} weight={700}>
                Formas de contato:
              </S.Text>
              <S.WrapperIcons>
                {contactIcons.map((icon, index) => {
                  const hoverIcon = icon.replace(".", "-hover.");
                  const nameIcon = icon.slice(1, -4);
                  return (
                    <Link href={state} target="_blank" key={index} onClick={() => dispatch({ icon: nameIcon })}>
                      <S.Icon icon={icon} hover={hoverIcon} />;
                    </Link>
                  );
                })}
              </S.WrapperIcons>
            </S.WrapperText>
          </S.ContainerTexts>
        </S.MotionDiv>
        <S.MotionDiv ref={ref} animate={controls} initial="hidden" variants={variants}>
          <Link
            href="https://www.google.com.br/maps/place/R.+Prof.+Jo%C3%A3o+Machado,+824+-+Nossa+Sra.+do+O,+S%C3%A3o+Paulo+-+SP,+02927-000/@-23.4973005,-46.7083713,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef854c68bfe69:0xcdc5d24ff4f25777!8m2!3d-23.4973005!4d-46.7057964!16s%2Fg%2F11csnqmdm5?entry=ttu"
            target="_blank"
          >
            <S.Map whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} />
          </Link>
        </S.MotionDiv>
      </S.ContainerAllComponents>
    </S.Container>
  );
}

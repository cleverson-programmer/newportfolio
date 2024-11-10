
import Box from '@mui/material/Box';
import BasicSpeedDial from '../ButtonResume/basicSpeedDial';
import { FlipWordsDemo } from '../flipWordDemo';


export default function RowAndColumnSpacing() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#040E1E",
      }}
    >
      <FlipWordsDemo />
      <div
        className="font-roboto p-4 mx-auto w-full md:w-1/2"
        style={{ maxWidth: "100%" }}
      >
        <div className="flex justify-between mb-5">
          <div className="h-min">
            <h2 className="text-2xl font-bold">CLEVERSON RESENDE</h2>
          </div>
          <div className=" text-white dark:text-neutral-400">
            <p>Brasil, 21 Anos</p>
            <p>CEP: 32419039, Ibirité, MG</p>
            <p>(33)99937-3400</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-2xl font-medium mb-1">Site Pessoal/Portfólio:</p>
          <p className="text-lg font-medium">GitHub:</p>
          <a href='https://github.com/cleverson-programmer' target='_blank'>https://github.com/cleverson-programmer</a>
          <p className="text-lg font-medium">Linkedin:</p>
          <a href='https://www.linkedin.com/in/cleverson-resende/' target='_blank'>https://www.linkedin.com/in/cleverson-resende/</a>
          <p className="text-lg font-medium">Email:</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cleverson.github@gmail.com" target='_blank'>cleverson.github@gmail.com</a>
        </div>

        <div className="flex mb-5">
          <div>
            <p className="text-2xl font-medium mb-2">Formação</p>
            <p className="text-lg font-medium">Escolaridade</p>
            <p>
              Cursando ENGENHARIA DE SOFTWARE, PONTIFÍCIA UNIVERSIDADE CATÓLICA
              DE MINAS GERAIS PUC MINAS (Formação prevista para Dezembro de
              2027). Turno da noite.
            </p>
            <p className="text-lg font-medium">Graduação - Bacharel.</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-2xl font-medium mb-2">Experiência</p>
          <p>Projetos de Landing Page.</p>
          <p>Desenvolvimento de sites comerciais.</p>
          <p>Projetos em equipe na faculdade.</p>
          <p>*Disponíveis no GitHub.</p>
          <p>
            Estou em busca da minha primeira oportunidade na área de
            desenvolvimento de software. Permaneço à disposição para me conectar
            com sua organização e levar minhas habilidades e perspectivas para
            um crescimento mútuo e exponencial.
          </p>
        </div>

        <div className="mb-5">
          <p className="text-2xl font-medium mb-2">Conhecimentos</p>
          <p>
            HTML5, CSS3, JavaScript, TypeScript, Figma, React, Next.js, Tailwind
            CSS, Bootstrap, Styled Components, SASS, Git e GitHub, WordPress,
            SQL, MongoDB, MySQL, Jest, Webpack, Babel, NPM, YARN. Gestão de
            projetos e métodos ágeis, comunicação efetiva, escrita persuasiva,
            transformação digital, storytelling para marketing digital,
            introdução a ciência de dados.
          </p>
        </div>

        <div className="mb-5">
          <p className="text-2xl font-medium mb-2">Cursos e certificados</p>
          <p className="text-lg font-medium mb-2">Santander Open Academy</p>
          <p>
            Trilha Digital Santander Coders Front-end.<br />
            Comunicação Efetiva.<br />
            Escrita Efetiva e Persuasiva.
          </p>
          <p className="text-lg font-medium mb-2">Ada Tech</p>
          <p>
            Javascript.<br />
            Figma para Devs.<br />
            Front-end em React.<br />
            Git e Versionamento.
          </p>
          <p className="text-lg font-medium mb-2">
            MIT Professional Education <br />
            The University of Chicago <br />
            IE University em parceria com Santander Open Academy
          </p>
          <p>
            Storytelling para Marketing Digital. <br />
            Transformação Digital. <br />
            Introdução a Ciência de Dados. <br />
            <a href="https://www.linkedin.com/in/cleverson-resende/" target='_blank'>*Links de validação e pdf dos certificados disponíveis no LinkedIn</a>
            <br />
          </p>
        </div>

        <div className="flex justify-center">
          <p className="text-lg font-bold mb-1">2024</p>
        </div>

        <BasicSpeedDial />
      </div>
      
    </Box>
  );
}

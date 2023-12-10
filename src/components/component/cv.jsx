import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CV() {
  return (
    <>
      <Card className="max-w-2xl mx-auto my-10 p-10">
        <CardHeader>
          <div className="flex items-center">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="User Avatar" src="https://portfoli-brian.netlify.app/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2Fdev-ed-wave.6daa4383.png?url=%2F_next%2Fstatic%2Fmedia%2Fdev-ed-wave.6daa4383.png&w=1920&q=75" />
              <AvatarFallback>SE</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <CardTitle className="text-2xl font-bold">Brian H. Gargallo Carnalla</CardTitle>
              <CardDescription className="text-gray-500">Computer Systems Engineer</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">About Me</h3>
              <p className="text-gray-600">
                Computer Systems Engineer with experience in software development and a passion for learning and teamwork.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-200 text-blue-800">JavaScript</Badge>
                <Badge className="bg-green-200 text-green-800">HTML \& CSS</Badge>
                <Badge className="bg-purple-200 text-purple-800">ReactJS</Badge>
                <Badge className="bg-yellow-200 text-yellow-800">Python</Badge>
                <Badge className="bg-pink-200 text-pink-800">Java</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Turefaccionariaenlinea (TREL)/Especialista de TI</h4>
                  <p className="text-gray-600">October 2023 – Present | Av. Centenario 1, Civac, Jiutepec, Mor.</p>
                  <ul>
                    <li>Working with Python to develop programs for mass publications on Mercado Libre and leading the project to centralize all processes.</li>
                    <li>Addressing chaos in controlling processes, modifications, and updates related to warehouses and products.</li>
                    <li>Directing the project for process centralization.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">MONIREO OBD/JR Android Programmer</h4>
                  <p className="text-gray-600">January 2023 – May 2023 | CDMX, Narvarte Poniente</p>
                  <ul>
                    <li>Developed new functionalities for the application and optimized code. Used Java and VisualBasic, along with Firebase and Android Studio.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Bio-agrizer S.C/Programador WEB</h4>
                  <p className="text-gray-600">February 2023 – May 2023 | Morelos, Zacatepec</p>
                  <ul>
                    <li>Utilized the JavaScript framework NextJS for client-side development of the web application.</li>
                    <li>Developed a NodeJS API to support the web application.</li>
                    <li>Created an e-commerce web application for agricultural products.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Ayuntamiento de Cuernavaca/Intern Engineer</h4>
                  <p className="text-gray-600">July 2022 – December 2022 | Morelos, Cuernavaca</p>
                  <ul>
                    <li>Participated in the design and improvement of an online registration system for entrepreneurial companies.</li>
                    <li>Skills used: JavaScript, HTML, CSS, MySQL, NextJS.</li>
                    <li>Successfully migrated the development environment from Mac to Windows to align with the team&apos;s preferred operating system.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Certifications</h3>
              <ul>
                <li>
                  <strong>Responsive Web Design Certification</strong> - FreeCodeCamp.org (April 17, 2022)
                </li>
                <li>
                  <strong>Angular Certification: From Zero to Expert</strong> - Fernando Herrera (In progress)
                </li>
                <li>
                  <strong>UX Design Certification: UX/UI + Figma</strong> - Javier Cañas (In progress)
                </li>
                <li>
                  <strong>JavaScript \& JQuery Course with Bonus VueJS Introduction Certification</strong> - Ivan Lourenço Gomes, Learn IT University, Andrii Piatakha (In progress)
                </li>
              </ul>
            </div>
            <div className="mt-6">
            <Button className="w-full" variant="outline">
            <a href="/CV Brian H Gargallo Carnalla.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default CV;

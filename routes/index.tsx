import { Image } from "../components/Image.tsx";
import { BlogEntry } from "../components/BlogEntry.tsx";
import { ByLine } from "../components/ByLine.tsx";

export default function Home() {
  return (
    <div className="px-4 py-8 mx-auto max-w-3xl">
      <div className="pt-16">
        <h1 className="text-5xl my-4 text-center">Bjørn Jarle Kvande</h1>
        <h3 className="text-center my-2 text-lg sm:text-2xl">
          Koderelatert arbeid, tanker, idéer, og frustrasjoner
        </h3>
      </div>

      <br />

      <Image src="/coding/programmerspet.jpg" />

      <div className="sm:text-lg leading-7 sm:leading-9 py-8">
        Hei, Bjørn Jarle heter jeg. Jeg bygger ting med kode. Her finner du en
        samling av innlegg om koding, tanker, idéer, og frustrasjoner som farer
        gjennom hodet på en utvikler som har vært med siden Commodore 64 sin
        storhetstid. Jeg elsker faget mitt, jobber ustanselig for å bli bedre,
        er godt ute på spekteret og er stadig sosialt forvirret. Men å
        programmere det er jeg ganske god på.
      </div>

      <BlogEntry>
        <>
          <h3 className="text-4xl">I'm a codeaholic</h3>
          <a href="/blog/codeaholic">
            <img
              src="https://res.cloudinary.com/trailguide-as/image/upload/v1728468082/coding/codeaholics.webp"
              className="w-48 ml-8 rounded md:float-right"
            />
          </a>
          <br />
          <ByLine author="Bjørn Jarle" text=", 9. october 2024" />
          <br />

          My name is Bjørn and I'm a codeaholic. People call me a founder and an
          entrepreneur. I am not. I am just a guy who likes to code and make
          stuff. I am a true codeaholic who cannot escape the addiction.

          <br />

          <a className="text-sky-600 block mt-4" href="/blog/codeaholic">
            Read more...
          </a>
        </>
      </BlogEntry>

      <BlogEntry>
        <>
          <h3 className="text-4xl">
            Would you rather have invested in a gold plated piece of lead, or a
            lead plated piece of gold?
          </h3>
          <a href="/blog/gold_or_led">
            <img
              src="https://res.cloudinary.com/trailguide-as/image/upload/v1728468082/coding/me_creating_stuff.jpg"
              className="w-48 ml-8 rounded md:float-right"
            />
          </a>
          <br />
          <ByLine author="Bjørn Jarle" text=", 16. june 2023" />
          <br />

          Imagine you are an investor and you discover that the piece of gold
          you invested in was just a piece of lead when you started polishing
          it. Do not get fooled my smooth-talking, charismatic founders who are
          better at selling you a great story than actually creating a great
          product.

          <br />

          <a className="text-sky-600 block mt-4" href="/blog/gold_or_led">
            Read more...
          </a>
        </>
      </BlogEntry>

      <BlogEntry>
        <>
          <h3 className="text-4xl">
            Investere i jævla bra gründere eller jævla bra produkter?
          </h3>
          <a href="/blog/invester-i-produktet">
            <img
              src="https://res.cloudinary.com/trailguide-as/image/upload/v1728468082/coding/kakediagram.jpeg"
              className="w-48 ml-8 rounded md:float-right"
            />
          </a>
          <br />
          <ByLine author="Bjørn Jarle" text=", 6. februar 2023" />
          <br />

          Investere i jævla dyktige gründere med middels bra produkter, eller et
          veldig bra produkt med en middelmådig gründer? Hva er det som egentlig
          er det beste? Og for hvem?

          <br />

          <a
            className="text-sky-600 block mt-4"
            href="/blog/invester-i-produktet"
          >
            Read more...
          </a>
        </>
      </BlogEntry>

      <BlogEntry>
        <>
          <h3 className="text-4xl">
            Automatisert testing
          </h3>
          <a href="/blog/automatisert_testing">
            <img
              src="https://res.cloudinary.com/trailguide-as/image/upload/v1728468082/coding/test-suites-passed.jpeg"
              className="w-48 ml-8 rounded md:float-right"
            />
          </a>
          <br />
          <ByLine author="Bjørn Jarle" text=", 2. februar 2023" />
          <br />

          Hva er det som <strong>egentlig</strong>{" "}
          er det viktigste med automatisert testing av programvare? Deployer du
          på en fredag ettermiddag kanskje?

          <br />

          <a
            className="text-sky-600 block mt-4"
            href="/blog/automatisert_testing"
          >
            Read more...
          </a>
        </>
      </BlogEntry>

      <footer class="clear-both text-gray-600 text-xs sm:text-sm p-2 sm:p-8">
        <div class="text-center mt-12">
          © Bjørn Jarle Kvande | All rights reserved
        </div>
      </footer>
    </div>
  );
}

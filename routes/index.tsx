import { Image } from "../components/Image.tsx";
import { BlogEntry } from "../components/BlogEntry.tsx";

export default function Home() {
  return (
    <div className="px-4 py-8 mx-auto max-w-3xl">
      <div className="pt-16">
        <h1 className="text-5xl my-4 text-center">Bjørn Jarle Kvande</h1>
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

      <BlogEntry
        title="I'm a codeaholic"
        url="codeaholic"
        image="coding/codeaholics.webp"
        date="9. october 2024"
      >
        My name is Bjørn and I'm a codeaholic. People call me a founder and an
        entrepreneur. I am not. I am just a guy who likes to code and make
        stuff. I am a true codeaholic who cannot escape the addiction.
      </BlogEntry>

      <BlogEntry
        title="Would you rather have invested in a gold plated piece of lead, or a lead plated piece of gold?"
        url="gold_or_led"
        image="coding/me_creating_stuff.jpg"
        date="16. june 2023"
      >
        Imagine you are an investor and you discover that the piece of gold you
        invested in was just a piece of lead when you started polishing it. Do
        not get fooled my smooth-talking, charismatic founders who are better at
        selling you a great story than actually creating a great product.
      </BlogEntry>

      <BlogEntry
        title="Investere i jævla bra gründere eller jævla bra produkter?"
        url="invester-i-produktet"
        image="coding/kakediagram.jpeg"
        date="6. februar 2023"
      >
        Investere i jævla dyktige gründere med middels bra produkter, eller et
        veldig bra produkt med en middelmådig gründer? Hva er det som egentlig
        er det beste? Og for hvem?
      </BlogEntry>

      <BlogEntry
        title="Automatisert testing"
        url="automatisert_testing"
        image="coding/test-suites-passed.jpeg"
        date="2. februar 2023"
      >
        Hva er det som egentlig er det viktigste med automatisert testing av
        programvare? Deployer du på en fredag ettermiddag kanskje?
      </BlogEntry>

      <footer class="clear-both text-gray-600 text-xs sm:text-sm p-2 sm:p-8">
        <div class="text-center mt-12">
          © Bjørn Jarle Kvande | All rights reserved
        </div>
      </footer>
    </div>
  );
}

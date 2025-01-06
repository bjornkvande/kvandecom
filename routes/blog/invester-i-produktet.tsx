import { BlogPage } from "../../components/BlogPage.tsx";
import { Image } from "../../components/Image.tsx";

export default function Blog() {
  return (
    <BlogPage
      title="Å investere i et programvareselskap"
      ingress="Jævla bra gründer eller jævla bra produkt?"
      date="6. Februar 2023"
    >
      <div>
        <h3>
          Er det lurest å investere i en jævla bra gründer eller et jævla bra
          produkt?
        </h3>

        <br />
        <br />

        Lørdag 28. januar 2023 leste jeg med stor interesse en portrettartikkel
        i DN om Birger Nergaard. Han startet norges første venture-fond på
        midten av 80-tallet.

        <br />
        <br />

        I artikkelen sier han rett ut at{" "}
        <strong>
          "Det er bedre å investere i et middels bra produkt, men med en jævla
          dyktig gründer, enn et veldig bra produkt og en middelmådig gründer"
        </strong>.

        <br />
        <br />

        Dette fikk meg til å tenkte på hvor smart er egentlig denne tankegangen
        når det kommer til å investere i startups innen programvare.

        <br />
        <br />

        Hva tror du koster mest? Å bytte ut et middelmådig produkt, eller å
        fylle et hull i gründerteamet med flinke folk som kan ta et fantastisk
        produkt ut i verden? For å lykkes stort er det heller ikke godt nok med
        et godt produkt og en jævla god gründer. I tillegg må man ha god timing
        og en god porsjon flaks.

        <br />
        <br />

        <Image src="/coding/kakediagram.png" />

        <br />
        <br />

        <h4>Hva er et veldig bra produkt?</h4>
        <br />
        I programvare er det to typer kvalitet. Det ytre og det indre.

        <br />
        <br />
        1. Systemet løser problemet for kunden på en utmerket måte og er enkelt,
        intuitivt og effektivt i bruk.
        <br />
        2. Interne kvaliteter i kodebasen som gjør at koden er lett å forstå og
        lett å videreutvikle.

        <br />
        <br />
        <br />

        <h4>En bolle med størkna spaghetti</h4>
        <br />
        La oss forestille oss at det investeres i en jævla god gründer med en
        god idé.

        <br />
        <br />

        Han (ja, det er som oftest en han) hyrer utviklere for å komme seg ut i
        markedet så fort som mulig og setter i gang med et vannvittig
        utviklingstempo for å rekke det før de går tom for penger.

        <br />
        <br />

        Her er det stor sjans for at man ender opp med et produkt som
        tilsynelatende ser bra ut, men som i realiteten har en kodebase som
        ligner en bolle med størkna spaghetti.

        <br />
        <br />

        Koden blir til slutt umulig å jobbe med og videreutviklingen stopper
        helt opp.

        <br />
        <br />

        Med en slik tilnærming ender man med å måtte starte på nytt etter
        lansering for å skrive om alt (<i>
          denne gangen skal det gjøres skikkelig
        </i>) mens kundene venter på nye funksjoner.

        <br />
        <br />

        Nye funksjoner som aldri kommer fordi det eksisterende systemet er
        umulig å videreutvikle, og utviklingen av det nye systemet stopper opp
        fordi man går tom for penger.{" "}
        <a href="automatisert_testing">
          (les mer om hvordan dette kan unngås her...)
        </a>

        <br />
        <br />
        <br />

        <h4>Et dårlig produkt frontet av en jævla bra gründer</h4>
        <br />
        Hva skjer når en jævla god gründer dytter ut et dårlig produkt som ender
        opp med å bli brukt av mange fordi han har et godt forretningstalent?

        <br />
        <br />

        Hvor mange arbeidstimer har gått bort i ren frustrasjon, sinne og dårlig
        effektivitet i samfunnet vårt fordi systemene som brukes er dårlig?

        <br />
        <br />

        Selv tar det meg nesten en halvtime å lage en faktura for en ny kunde.
        Systemet jeg bruker til dette er pålagt meg av regnskapsfører og er et
        stort og velkjent økonomisystem. Et system med stor økonomisk suksess,
        brakt til verden av en genierklært gründer med stor forretningssans.

        <br />
        <br />
        <br />

        <h4>Er dette virkelig den beste måten å gjøre det på?</h4>
        <br />
        Hvor mye av investorenes penger forduftet egentlig hos selskapene til
        Adam Neuman (ordinært eiendomsprodukt frontet som revolusjonerende
        teknologi), Elisabeth Holmes (fake it until you make it - or not) og Sam
        Bankman-Fried (svindel)? Ganske mange milliarder dollar.

        <br />
        <br />

        Ingen vet hvor mange fantastiske produkter som ikke ser dagens lys fordi
        de som lager det ikke har egenskapene i seg for å få det ut i markedet.
        Dette er gjerne de samme egenskapene som trengs for å skaffe til veie
        investorer.

        <br />
        <br />
        <br />

        <h4>Kan det gjøres på andre måter?</h4>
        <br />
        Kunne verden ha vært en bedre plass om noen av disse fantastiske
        produktene med disse såkalte middelmådige gründerne hadde blitt koblet
        sammen med jævla bra selgere, markedsførere og forretningsutviklere?

        <br />
        <br />

        Det er rimeligere å fylle et hull i et team enn å bytte ut et dårlig
        produkt.

        <br />
        <br />
        <br />

        <div className="text-4xl text-gray-700 mt-8 italics text-center bg-gray-200 px-8 py-6 rounded shadow-md">
          Det er på tide investorer ser muligheten i å investere i jævla bra
          produkter laget av fantastiske utviklere!
        </div>
      </div>
    </BlogPage>
  );
}

import { Image } from "../../components/Image.tsx";

export default function AutomatedTesting() {
  return (
    <div>
      <h1>Å investere i et programvareselskap</h1>
      <h3>Jævla bra gründer eller jævla bra produkt?</h3>

      author: Bjørn Jarle Kvande date: 2023-02-06

      ### Er det lurest å investere i en jævla bra gründer eller et jævla bra
      produkt?

      <br />

      Lørdag 28. januar 2023 leste jeg med stor interesse en portrettartikkel i
      DN om Birger Nergaard. Han startet norges første venture-fond på midten av
      80-tallet.

      <br />

      I artikkelen sier han rett ut at **"Det er bedre å investere i et middels
      bra produkt, men med en jævla dyktig gründer, enn et veldig bra produkt og
      en middelmådig gründer"**.

      <br />

      Dette fikk meg til å tenkte på hvor smart er egentlig denne tankegangen
      når det kommer til å investere i startups innen programvare.

      <br />
      Hva tror du koster mest? Å bytte ut et middelmådig produkt, eller å fylle
      et hull i gründerteamet med flinke folk som kan ta et fantastisk produkt
      ut i verden? For å lykkes stort er det heller ikke godt nok med et godt
      produkt og en jævla god gründer. I tillegg må man ha god timing og en god
      porsjon flaks.

      <Image src="/coding/kakediagram.png" />

      <br />

      #### Hva er et veldig bra produkt?

      I programvare er det to typer kvalitet. Det ytre og det indre.

      1. Systemet løser problemet for kunden på en utmerket måte og er enkelt,
      intuitivt og effektivt i bruk.

      2. Interne kvaliteter i kodebasen som gjør at koden er lett å forstå og
      lett å videreutvikle.

      <br />

      #### En bolle med størkna spaghetti

      La oss forestille oss at det investeres i en jævla god gründer med en god
      idé.

      <br />

      Han (ja, det er som oftest en han) hyrer utviklere for å komme seg ut i
      markedet så fort som mulig og setter i gang med et vannvittig
      utviklingstempo for å rekke det før de går tom for penger.

      <br />

      Her er det stor sjans for at man ender opp med et produkt som
      tilsynelatende ser bra ut, men som i realiteten har en kodebase som ligner
      en bolle med størkna spaghetti. Koden blir til slutt umulig å jobbe med og
      videreutviklingen stopper helt opp.

      <br />

      Med en slik tilnærming ender man med å måtte starte på nytt etter
      lansering for å skrive om alt (_denne gangen skal det gjøres skikkelig_)
      mens kundene venter på nye funksjoner. Nye funksjoner som aldri kommer
      fordi det eksisterende systemet er umulig å videreutvikle, og utviklingen
      av det nye systemet stopper opp fordi man går tom for penger. [(les mer om
      hvordan dette kan unngås her...)](/coding/automatisert_testing)

      <br />

      #### Et dårlig produkt frontet av en jævla bra gründer

      Hva skjer når en jævla god gründer dytte ut et dårlig produkt som ender
      opp med å bli brukt av mange fordi han har et godt forretningstalent?

      <br />

      Hvor mange arbeidstimer har gått bort i ren frustrasjon, sinne og dårlig
      effektivitet i samfunnet vårt fordi systemene som brukes er dårlig?

      <br />

      Selv tar det meg nesten en halvtime å lage en faktura for en ny kunde.
      Systemet jeg bruker til dette er pålagt meg av regnskapsfører og er et
      stort og velkjent økonomisystem. Et system med stor økonomisk suksess,
      brakt til verden av en genierklært gründer med stor forretningssans.

      <br />

      #### Er dette virkelig den beste måten å gjøre det på?

      Hvor mye av investorenes penger forduftet egentlig hos selskapene til Adam
      Neuman (ordinært eiendomsprodukt frontet som revolusjonerende teknologi),
      Elisabeth Holmes (fake it until you make it - or not) og Sam Bankman-Fried
      (svindel)? Ganske mange milliarder dollar.

      <br />

      Ingen vet hvor mange fantastiske produkter som ikke ser dagens lys fordi
      de som lager det ikke har egenskapene i seg for å få det ut i markedet.
      Dette er gjerne de samme egenskapene som trengs for å skaffe til veie
      investorer.

      <br />

      #### Kan det gjøres på andre måter?

      Kunne verden ha vært en bedre plass om noen av disse fantastiske
      produktene med disse såkalte middelmådige gründerne hadde blitt koblet
      sammen med jævla bra selgere, markedsførere og forretningsutviklere?

      <br />

      Det er rimeligere å fylle et hull i et team enn å bytte ut et dårlig
      produkt.

      <br />

      <div className="text-4xl text-gray-700 mt-8 italics text-center bg-gray-200 px-8 py-6 rounded shadow-md">
        Det er på tide investorer ser muligheten i å investere i jævla bra
        produkter laget av fantastiske utviklere!
      </div>
    </div>
  );
}

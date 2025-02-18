import { BlogPage } from '../../components/BlogPage.tsx';
import { Image } from '../../components/Image.tsx';

export default function Blog() {
  return (
    <BlogPage
      title='Automatisert testing'
      ingress='Og hva er det egentlig som er viktigst?'
      date='2. Februar 2023'
    >
      <div>
        <h3>Hvorfor er gode automatiserte tester så viktig?</h3>

        <br />

        Mange utviklere maser om at man må drive test-driven development (TDD) og ha unit-
        og integrasjonstester for systemene man utvikler.

        <br />
        <br />

        Så har du utviklere som sier de ikke har tid til å skrive tester eller mener
        testene kommer i veien for videreutviklingen av systemet sitt.

        <br />
        <br />

        "Hver gang jeg endrer noe i koden eller skal legge til en ny funksjon så er det
        noen av testene som feiler og jeg må fikse på testen" er noen av unnskyldningene
        man hører.

        <br />
        <br />

        Jeg er definitivt av den typen utviklere som skriver tester og jeg kan ikke forstå
        hvorfor andre velger å ikke ha gode tester for prosjektet sitt. Uten tester blir
        det for meg som å hoppe fra et fly uten fallskjerm (håper de i det lengste det
        skal gå bra?)

        <br />
        <br />

        Hva er viktig for å lykkes med test-driven development, og hva er det som{' '}
        <strong>egentlig</strong> er det viktigste med automatisert testing.

        <br />
        <br />
        <br />

        <h4>Test-driven development</h4>
        <br />
        Prinsippet er enkelt. Man skriver en test for funksjonen man skal lage. Ser at
        testen feiler (rødt). Implementerer funksjonen med en røff implementasjon og får
        det til å virke (grønt). Deretter bruker man litt tid på å skrive om koden slik at
        den blir lett å lese, lett å forstå og gjerne mindre i samme slengen (refactor).

        <br />
        <br />

        Følger man en slik prosess får man god kode som virker (i følge testene) og på
        kjøpet får man et sikkerhetsnett mot å ødelegge noe når koden senere trenger å
        endres.

        <br />
        <br />
        <br />

        <h4>En iterativ prosess</h4>
        <br />
        Mange reagerer med "jeg kan da ikke skrive en hel test før jeg vet hva jeg skal
        lage". Det er jo selvsagt sant.

        <br />
        <br />

        Skriving av tester og kode er en iterativ prosess hvor man skriver test og kode
        parallelt, litt av testen først, og deretter litt av koden. Litt test. Litt kode.
        Så kommer man til slutten og du vet du er ferdig med funksjonen og den fungerer.

        <br />
        <br />
        <br />

        <h4>Testing av oppførsel, ikke implementasjon</h4>
        <br />
        Hva er det som har skjedd når testene kommer i veien for videreutviklingen og de
        lyser rødt hver gang man skal endre noe eller legge til noe?

        <br />
        <br />

        Dette skjer fordi man har skrevet en test som tester implementasjonen i stedet for
        den forventede oppførselen. Dette skjer gjerne om man skriver tester i ettertid
        hvor man ser på hvordan man har implementert en funksjon for å skrive testen.

        <br />
        <br />

        Testene dine blir dermed mer som en hemsko og et irritasjonsmoment som begrenser
        utviklingstempo i stedet for et verdifullt sikkerhetsnett som øker
        utviklingshastigheten.

        <br />
        <br />

        Har du en test-driven utviklingsprosess (hvor testene driver implementasjonen) vil
        testene naturlig ende opp med å teste oppførselen, ikke implementasjonen.

        <br />
        <br />
        <br />

        <h4>Tester må kjøres raskt</h4>

        Man må skrive tester som kjøres raskt. De skal kjøre på sekunder, og ikke
        minutter.

        <br />
        <br />

        Man bør ha en iterativ prosess hvor man har tester kjørende i bakgrunnen
        (automatisk utvalgt basert på koden som er endret) og man ser med en gang om man
        har ødelagt noe.

        <br />
        <br />

        Man bør ha en iterativ prosess hvor man gjerne comitter kode flere ganger i timen,
        og hvor man hele tiden er sikker på at koden fungerer og kan deployes på et
        øyeblikks varsel.

        <br />
        <br />

        Mine 2930 unit- og integrasjonstester kjøres på 30 sekunder. Dermed kommer de ikke
        i veien og du kjører dem kanskje hundrevis av ganger gjennom hele dagen.

        <br />
        <br />
        <br />

        <Image src='/news/test-suites-passed.png' />

        <br />
        <br />
        <br />

        <h4>Hva er det absolutt viktigste med automatiserte tester?</h4>
        <br />
        Med test-driven development og automatiserte unit- og integrasjonstester får man
        et verktøy for å vite at koden fungerer etter intensjonen og man får et
        sikkerhetsnett mot å ødelegge noe når man trenger å endre koden eller legge til
        nye funksjoner.

        <br />
        <br />

        Men hva er det som <strong>egentlig</strong>{' '}
        er det viktigste med automatisert testing i et langvarig utviklingsprosjekt?

        <br />
        <br />

        <strong>
          Med automatiserte tester, som tester oppførsel, har du alltid mulighet til å
          endre og forbedre kodebasen din og hele tiden holde den i en optimal
          helsetilstand.
        </strong>

        <br />
        <br />

        Dette er det absolutt viktigste med automatiserte tester om man har et prosjekt
        som går over flere år og skal videreutvikles.

        <br />
        <br />

        Har man ikke tester og skal legge til ny funksjonalitet har man ingen garanti for
        at man ikke ødelegger noe. Man har også en tendens til å "skvise" inn ny
        funksjonalitet et sted i koden fordi man ikke tør å rydde opp først uten å kanskje
        ødelegge noe.

        <br />
        <br />

        Dermed vil kodebasen din sakte men sikkert kompliseres, bli uoversiktlig, teknisk
        gjeld bygger seg opp og til slutt størkner den som en bolle med ei ukes gammel
        spaghetti. All videreutvikling stopper opp og du har ikke mulighet til å fikse
        feil uten å introdusere nye feil.

        <br />
        <br />

        Hvordan man kan utvikle kommersiell programvare uten å ha muligheten til å
        kontinuerlig forbedre og forenkle den dyrebare kodebasen sin fordi de ikke har tid
        til å skrive tester, det er for meg helt uforståelig. Man kommer til et punkt hvor
        alt stopper opp til slutt. Det er da utviklere maser om å begynne på nytt og lover
        på død og liv at "denne gangen, da skal det bli perfekt".

        <br />
        <br />

        En kodebase er alltid deilig og flott når den er ny. Alt er oversiktlig og
        ingenting er komplisert. Utviklingen er artig og det går kjempefort. Helt til det
        ikke gjør det lenger og man ligger i grøfta. Tiden det tar før man havner i grøfta
        med koden sin kan være mye kortere enn man tror og man vet ikke helt hva som
        skjedde.

        <br />
        <br />
        <br />

        <h4>Jeg deployer alltid en ny versjon fredag ettermiddag jeg!</h4>
        <br />
        Selv nyter jeg et fantastisk sikkerhetsnett i kodebasen min med en miks av statisk
        kodeanalyse (eslint), unit- og integrasjonstester (jest/react-testing-library),
        ende-til-ende tester (cypress) og sanntids feilrapportering i produksjon (sentry).

        <br />
        <br />

        Jeg følger alltid "speider-prinsippet" hvor man forlater koden litt bedre enn når
        man kom når man skal legge til ny funksjonalitet. Og jeg gjør det fryktløst.

        <br />
        <br />

        Jeg kan legge til ny funksjonalitet i løpet av noen minutter eller noen få timer.
        Jeg legger gjerne ut 10-15 nye versjoner per dag.

        <br />
        <br />

        Og jeg deployer <strong>alltid</strong>{' '}
        på en fredag ettermiddag. Kan du gjøre det?
      </div>
    </BlogPage>
  );
}

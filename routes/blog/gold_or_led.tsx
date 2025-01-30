import { BlogPage } from '../../components/BlogPage.tsx';
import { Image } from '../../components/Image.tsx';

export default function Blog() {
  return (
    <BlogPage
      title="Don't be fooled by smooth-talking founders!"
      date='16. June 2023'
    >
      <div>
        <h2>
          Would you rather have invested in a gold-plated piece of lead, or a lead-plated
          piece of gold?
        </h2>

        <br />
        <br />

        I am not an investor, but I am on the receiving side of the table as a software
        and technology developer in the travel tech industry.

        <br />
        <br />

        Being a person who is a lot more interrested in creating cool stuff than talking
        about it, I am at times quite frustrated about the state of mind of tech
        investors.

        <br />
        <br />

        My question is this:

        <br />
        <br />

        <strong>
          "Would you rather have invested in a gold-plated piece of lead, or a lead-plated
          piece of gold?"
        </strong>

        <br />
        <br />

        Of course the answer is obvious when (after the fact) you discover the piece of
        gold you invested in was actually a piece of lead when you start polishing it. Not
        worth much, you end up with lead poisioning, and it is too late.

        <br />
        <br />
        <br />

        <h4>Smooth-talking founders</h4>
        <br />
        I will argue that the <strong>gold-plated piece of lead</strong>{' '}
        is the equivalent of an amazingly charismatic founder, selling a great story to
        the investor, but not being able to back it up with a great product.

        <br />
        <br />

        Of course, the investor team should discover that this golden nugget they are
        about to invest in is really crap during their due diligence process.

        <br />
        <br />

        However, there are many examples of this not happening (for instance Elisabeth
        Holmes of Theranos - in jail, Sam Bankman Fried of FTX - going to jail soon, Adam
        Neuman of WeWork - has amazingly received new funding).

        <br />
        <br />

        <strong>
          Imagine all the money wasted on these investments due to those charismatic
          founders and greedy tech investors afraid of loosing out on the next big thing.
        </strong>

        <br />
        <br />
        <br />

        <h4>Highly focused developers</h4>
        <br />
        The <strong>lead-plated piece of gold</strong>{' '}
        is the equivalent of those highly focused developers sitting in front of their
        computers creating great stuff which really brings value to customers and users.

        <br />
        <br />

        These founders are seldom able to even reach the state of due dilligence with an
        investor:
        <br />
        <br />

        <ol className='list-decimal list-inside'>
          <li>
            They tend to just continue programming and creating stuff, not wanting to
            approach investors because they are not mentally able to do it.
          </li>
          <br />
          <li>
            Only being able to speak about their tech stack, amazing code quality, and the
            automatic testing rig they have set up, the investor team will not be able to
            see past the stuttering developer and give them a fair change
          </li>
        </ol>

        <br />

        <i>
          I know, because I am one of those developers and founders. I absolutely love
          programming and creating cool stuff. But I hate the process of trying to sell it
          so much that I constantly go back to the creative process of development (which
          will not pay your bills).
        </i>

        <br />
        <br />

        <strong>
          Imagine all the money that was never made and all those great products and
          technologies that were lost because the projects never had a chance to raise the
          capital they needed and deserved.
        </strong>

        <br />
        <br />

        As an investor, which piece would you be left with after polishing it?

        <br />
        <br />

        <div className='flex flex-wrap justify-center'>
          <Image src='coding/me_creating_stuff.jpg' />
          <div className='italic text-gray-700 text-sm my-4'>
            Me creating great stuff and not telling anyone about it in 1984
          </div>
        </div>
      </div>
    </BlogPage>
  );
}

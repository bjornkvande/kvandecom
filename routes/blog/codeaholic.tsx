import { BlogPage } from '../../components/BlogPage.tsx';
import { Image } from '../../components/Image.tsx';

export default function Blog() {
  return (
    <BlogPage title="I'm a codeaholic" date='9. October 2024'>
      <div>
        <h2>My name is Bjørn and I'm a codeaholic!</h2>

        <br />

        People call me a founder and an entrepreneur. I am not. I am just a guy who likes
        to code and make stuff. I am a true codeaholic.

        <br />
        <br />

        <ul className='list-disc list-inside'>
          <li>I code because it makes me feel happy</li>
          <li>
            I code to experience pleasure and satisfaction
          </li>
          <li>I code because it makes me relax</li>
          <li>
            I code to enjoy myself
          </li>
          <li>I code to reward myself</li>
          <li>I code to escape from reality</li>
          <li>
            I code to cope with stress or problems
          </li>
          <li>I code to alleviate anxiety</li>
        </ul>

        <br />

        All this coding sometimes results in useful and often good products.

        <br />
        <br />

        But....

        <br />
        <br />

        <ul className='list-disc list-inside'>
          <li>I choose to code instead of trying to sell my stuff</li>
          <li>I choose to code instead of meeting potential customers</li>
          <li>
            I choose to code instead of trying to find potential investors
          </li>
          <li>I choose to code instead of doing marketing</li>
          <li>I choose to code instead of sending out invoices</li>
          <li>
            I choose to code long into the night even though I know it hurts my sleep
          </li>
          <li>I choose to code instead of hanging with friends</li>
        </ul>

        <br />
        <br />

        And....

        <br />
        <br />

        <ul className='list-disc list-inside'>
          <li>I lie about how much I code</li>
          <li>I lie about how often I code</li>
          <li>I mostly code alone</li>
          <li>I code a lot in the morning before breakfast</li>
          <li>I neglect my responsibilities and keep on coding</li>
          <li>I have blackouts and forget the world around me while coding</li>
          <li>I become irritable if I am not able to code for a while</li>
          <li>I think about coding all day, every day</li>
          <li>I ignore my health and prioritise coding</li>
          <li>I have coding benders that lasts for days</li>
        </ul>

        <br />
        <br />

        Can anyone help me? Seriously.

        <br />
        <br />
        <br />
        <br />

        <div className='flex flex-wrap justify-center'>
          <Image src='coding/codeaholics.jpg' />
          <div className='italic text-gray-700 text-sm my-4'>
            A fully booked meeting of introverted codeaholics anonymous
          </div>
        </div>
      </div>
    </BlogPage>
  );
}

import { BlogPage } from '../../components/BlogPage.tsx';

export default function Blog() {
  return (
    <BlogPage title='Skiguide' date='14. January 2025'>
      <div>
        <h2>Testing the skiguide plugin</h2>

        <br />
        <br />

        {/* @ts-expect-error - this is our skiguide app plugin */}
        <skiguide-app />

        {/* deno-fmt-ignore */}
        <script>
          let js = document.createElement('script'); 
          js.type = 'text/javascript'; 
          js.src = 'https://skiguide.app/plugin.js'; 
          js.async = true;
          document.querySelector('head').appendChild(js);
        </script>
      </div>
    </BlogPage>
  );
}

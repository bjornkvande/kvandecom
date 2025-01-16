import { BlogPage } from "../../components/BlogPage.tsx";

export default function Blog() {
  return (
    <BlogPage title="Skiguide" date="14. January 2025">
      <div>
        <h2>Testing the skiguide plugin</h2>

        <br />
        <br />

        <skiguide-app />

        <script>
          let js = document.createElement('script'); js.type =
          'text/javascript'; js.src = 'https://skiguide.app/plugin.js'; js.async
          = true; document.querySelector('head').appendChild(js);
        </script>
      </div>
    </BlogPage>
  );
}

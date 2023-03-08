const Page = ({ params }) => (
    <p>/{params.route?.join('/')}</p>
);

export default Page;

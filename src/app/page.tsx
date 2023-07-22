import Layout from "./layout";
import Home from "./pages/Home";
import "./styles/styles.css";

const Page = () => {
	return (
		<>
			<Layout>
				<div className="container mx-auto p-4">
					<Home />
				</div>
			</Layout>
		</>
	);
};

export default Page;

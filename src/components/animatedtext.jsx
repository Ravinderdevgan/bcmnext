export default function AnimatedText({
text,
className = "",
}) {
return (
<h1 className={`${className} animate-fade-up`}>
{text} </h1>
);
}

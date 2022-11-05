"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l="React Router",i={unversionedId:"react/react-router/router-v6",id:"react/react-router/router-v6",title:"React Router",description:"React Router v6.4.3",source:"@site/docs/react/react-router/router-v6.md",sourceDirName:"react/react-router",slug:"/react/react-router/router-v6",permalink:"/docu/docs/react/react-router/router-v6",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Router",permalink:"/docu/docs/category/router"},next:{title:"Tutorial Intro",permalink:"/docu/docs/intro"}},s={},u=[{value:"React Router v6.4.3",id:"react-router-v643",level:2},{value:"Conectar URL",id:"conectar-url",level:2},{value:"Link",id:"link",level:2},{value:"Agregar Rutas",id:"agregar-rutas",level:2},{value:"Rutas anidadas",id:"rutas-anidadas",level:2},{value:"Paso 1",id:"paso-1",level:6},{value:"Paso 2 App.jsx",id:"paso-2-appjsx",level:6},{value:"Ruta \xedndice",id:"ruta-\xedndice",level:2},{value:"Enlaces activos (NavLink)",id:"enlaces-activos-navlink",level:2},{value:"404",id:"404",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Par\xe1metros de b\xfasqueda",id:"par\xe1metros-de-b\xfasqueda",level:2},{value:"Netlify + queryParams",id:"netlify--queryparams",level:2},{value:"Proyecto Final",id:"proyecto-final",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-router"},"React Router"),(0,r.kt)("h2",{id:"react-router-v643"},"React Router v6.4.3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/6.4.3"},"React Router")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Router es una biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React."),(0,r.kt)("li",{parentName:"ul"},"React Router se ejecuta en cualquier lugar donde se ejecute React; en la web, en el servidor con node.js y en React Native.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx create-react-app router-tutorial\ncd router-tutorial\nnpm i react-router-dom@6\nnpm start\n")),(0,r.kt)("h2",{id:"conectar-url"},"Conectar URL"),(0,r.kt)("p",null,"Lo primero es lo primero, queremos conectar su aplicaci\xf3n a la URL del navegador: importarla ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," y renderizarla alrededor de toda su aplicaci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport { BrowserRouter } from "react-router-dom";\n\nimport App from "./App";\n\nReactDOM.render(\n    <BrowserRouter>\n        <App />\n    </BrowserRouter>,\n    document.getElementById("root")\n);\n')),(0,r.kt)("h2",{id:"link"},"Link"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Navbar.jsx"',title:'"Navbar.jsx"'},'import { Link } from "react-router-dom";\n\nconst Navbar = () => {\n    return (\n        <nav className="navbar navbar-dark bg-dark">\n            <div className="container">\n                <Link className="btn btn-outline-primary" to="/">\n                    Inicio\n                </Link>\n                <Link className="btn btn-outline-primary" to="/blog">\n                    Blog\n                </Link>\n                <Link className="btn btn-outline-primary" to="/contacto">\n                    Contacto\n                </Link>\n            </div>\n        </nav>\n    );\n};\n\nexport default Navbar;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="App.jsx"',title:'"App.jsx"'},'import Navbar from "./components/Navbar";\n\nconst App = () => {\n    return (\n        <div>\n            <Navbar />\n            <div className="container">\n                <h1>App</h1>\n            </div>\n        </div>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("h2",{id:"agregar-rutas"},"Agregar Rutas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/routes/Blog.jsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/routes/Contacto.jsx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/routes/Inicio.jsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.jsx"',title:'"index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport "bootstrap/dist/css/bootstrap.min.css";\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\nimport App from "./App";\nimport Blog from "./routes/Blog";\nimport Contacto from "./routes/Contacto";\n\nReactDOM.render(\n    <BrowserRouter>\n        <Routes>\n            <Route path="/" element={<App />} />\n            <Route path="blog" element={<Blog />} />\n            <Route path="contacto" element={<Contacto />} />\n        </Routes>\n    </BrowserRouter>,\n    document.getElementById("root")\n);\n')),(0,r.kt)("h2",{id:"rutas-anidadas"},"Rutas anidadas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Es posible que haya notado al hacer clic en los enlaces que el dise\xf1o Appdesaparece."),(0,r.kt)("li",{parentName:"ul"},"Cuando las rutas tienen ni\xf1os, hace dos cosas:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Anida las URL ( "/" + "blog" y "/" + "contacto")'),(0,r.kt)("li",{parentName:"ul"},"Anidar\xe1 los componentes de la interfaz de usuario para el dise\xf1o compartido cuando la ruta secundaria coincida.")))),(0,r.kt)("h6",{id:"paso-1"},"Paso 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'ReactDOM.render(\n    <BrowserRouter>\n        <Routes>\n            <Route path="/" element={<App />}>\n                <Route path="blog" element={<Blog />} />\n                <Route path="contacto" element={<Contacto />} />\n            </Route>\n        </Routes>\n    </BrowserRouter>,\n    document.getElementById("root")\n);\n')),(0,r.kt)("h6",{id:"paso-2-appjsx"},"Paso 2 App.jsx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},'import { Outlet } from "react-router";\nimport Navbar from "./components/Navbar";\n\nconst App = () => {\n    return (\n        <div>\n            <Navbar />\n            <div className="container">\n                <Outlet />\n            </div>\n        </div>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("h2",{id:"ruta-\xedndice"},"Ruta \xedndice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'ReactDOM.render(\n    <BrowserRouter>\n        <Routes>\n            <Route path="/" element={<App />}>\n                <Route index element={<Inicio />} />\n                <Route path="blog" element={<Blog />} />\n                <Route path="contacto" element={<Contacto />} />\n            </Route>\n        </Routes>\n    </BrowserRouter>,\n    document.getElementById("root")\n);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe que tiene el ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," prop en lugar de ",(0,r.kt)("inlineCode",{parentName:"li"},"path"),"."),(0,r.kt)("li",{parentName:"ul"},"Eso es porque la ruta del \xedndice comparte la ruta del padre."),(0,r.kt)("li",{parentName:"ul"},"Las rutas de \xedndice coinciden cuando una ruta principal coincide, pero ninguna de las otras secundarias coincide."),(0,r.kt)("li",{parentName:"ul"},"Las rutas de \xedndice son la ruta secundaria predeterminada para una ruta principal."),(0,r.kt)("li",{parentName:"ul"},"Las rutas de \xedndice se representan cuando el usuario a\xfan no ha hecho clic en uno de los elementos de una lista de navegaci\xf3n.")),(0,r.kt)("h2",{id:"enlaces-activos-navlink"},"Enlaces activos (NavLink)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactrouter.com/en/v6.3.0/getting-started/tutorial#active-links"},"M\xe1s info"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { NavLink } from "react-router-dom";\n\nconst Navbar = () => {\n    return (\n        <nav className="navbar navbar-dark bg-dark">\n            <div className="container">\n                <NavLink className="btn btn-outline-primary" to="/">\n                    Inicio\n                </NavLink>\n                <NavLink className="btn btn-outline-primary" to="/blog">\n                    Blog\n                </NavLink>\n                <NavLink className="btn btn-outline-primary" to="/contacto">\n                    Contacto\n                </NavLink>\n            </div>\n        </nav>\n    );\n};\n\nexport default Navbar;\n')),(0,r.kt)("h2",{id:"404"},"404"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Link } from "react-router-dom";\n\nconst NoEncontrada = () => {\n    return (\n        <div>\n            <h1>404</h1>\n            <Link to="/" className="btn btn-outline-dark">\n                Inicio\n            </Link>\n        </div>\n    );\n};\n\nexport default NoEncontrada;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'ReactDOM.render(\n    <BrowserRouter>\n        <Routes>\n            <Route path="/" element={<App />}>\n                <Route index element={<Inicio />} />\n                <Route path="blog" element={<Blog />} />\n                <Route path="contacto" element={<Contacto />} />\n                // highlight-next-line\n                <Route path="*" element={<NoEncontrada />} />\n            </Route>\n        </Routes>\n    </BrowserRouter>,\n    document.getElementById("root")\n);\n')),(0,r.kt)("h2",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6"},"fetch dev.to  \ud83d\ude80")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/nicomartin/the-right-way-to-fetch-data-with-react-hooks-48gc"},"\xbfforma correcta?  \ud83d\ude80")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-fetch-hook"},"npm react fetch hook  \ud83d\ude80"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="hooks/useFetch.js"',title:'"hooks/useFetch.js"'},'import { useEffect, useState } from "react";\n\nexport const useFetch = (url) => {\n    const [data, setData] = useState([]);\n    const [error, setError] = useState("");\n    const [loading, setLoading] = useState(false);\n\n    useEffect(() => {\n        setLoading(true);\n        fetch(url)\n            .then((res) => res.json())\n            .then((data) => setData(data))\n            .catch((e) => setError("Ocurri\xf3 un error"))\n            .finally(() => setLoading(false));\n    }, [url]);\n\n    return { data, error, loading };\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.jsx"',title:'"Blog.jsx"'},'import { Link } from "react-router-dom";\nimport { useFetch } from "../hooks/useFetch";\n\nconst Blog = () => {\n    const { data, error, loading } = useFetch(\n        "https://jsonplaceholder.typicode.com/posts"\n    );\n\n    if (loading) {\n        return <h1>Loading...</h1>;\n    }\n\n    if (error !== "") {\n        return <h1>{error}</h1>;\n    }\n\n    return (\n        <div>\n            <h1>Blog</h1>\n            {data.map((item) => (\n                <h4 key={item.id}>\n                    <Link to={`/blog/${item.id}`}>\n                        {item.id} - {item.title}\n                    </Link>\n                </h4>\n            ))}\n        </div>\n    );\n};\n\nexport default Blog;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'ReactDOM.render(\n    <BrowserRouter>\n        <Routes>\n            <Route path="/" element={<App />}>\n                <Route index element={<Inicio />} />\n                <Route path="blog" element={<Blog />} />\n                // highlight-next-line\n                <Route path="blog/:id" element={<Post />} />\n                <Route path="contacto" element={<Contacto />} />\n                <Route path="*" element={<NoEncontrada />} />\n            </Route>\n        </Routes>\n    </BrowserRouter>,\n    document.getElementById("root")\n);\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Post.jsx"',title:'"Post.jsx"'},'\nimport { useParams } from "react-router";\nimport { useFetch } from "../hooks/useFetch";\n\nconst Post = () => {\n    let params = useParams();\n\n    const { data, error, loading } = useFetch(\n        "https://jsonplaceholder.typicode.com/posts/" + params.id\n    );\n\n    if (loading) {\n        return <h1>Loading...</h1>;\n    }\n\n    if (error !== "") {\n        return <h1>{error}</h1>;\n    }\n\n    return (\n        <div>\n            <h1>\n                {data.id} - {data.title}\n            </h1>\n            <p>{data.body}</p>\n        </div>\n    );\n};\n\nexport default Post;\n')),(0,r.kt)("h2",{id:"par\xe1metros-de-b\xfasqueda"},"Par\xe1metros de b\xfasqueda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Router hace que sea f\xe1cil de leer y manipular los par\xe1metros de b\xfasqueda con ",(0,r.kt)("inlineCode",{parentName:"li"},"useSearchParams")),(0,r.kt)("li",{parentName:"ul"},"Funciona de manera muy similar, ",(0,r.kt)("inlineCode",{parentName:"li"},"React.useState()")," pero almacena y establece el estado en los par\xe1metros de b\xfasqueda de URL en lugar de en la memoria.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.jsx"',title:'"Blog.jsx"'},'let [searchParams, setSearchParams] = useSearchParams();\n\nuseEffect(() => {\n    // http://localhost:3000/blog?nombre=juan\n    console.log(searchParams.get("nombre"));\n}, [searchParams]);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.jsx"',title:'"Blog.jsx"'},'import { Link, useSearchParams } from "react-router-dom";\nimport { useFetch } from "../hooks/useFetch";\n\nconst Blog = () => {\n    let [searchParams, setSearchParams] = useSearchParams();\n\n    const { data, error, loading } = useFetch(\n        "https://jsonplaceholder.typicode.com/posts"\n    );\n\n    if (loading) {\n        return <h1>Loading...</h1>;\n    }\n\n    if (error !== "") {\n        return <h1>{error}</h1>;\n    }\n\n    const handleChange = (e) => {\n        let filter = e.target.value;\n        if (filter) {\n            setSearchParams({ filter });\n        } else {\n            setSearchParams({});\n        }\n    };\n\n    return (\n        <div>\n            <h1>Blog</h1>\n            <input\n                className="form-control mb-2"\n                type="text"\n                value={searchParams.get("filter") || ""}\n                onChange={handleChange}\n            />\n            {data\n                .filter((item) => {\n                    let filter = searchParams.get("filter");\n                    if (!filter) return true;\n                    let name = item.title.toLowerCase();\n                    return name.startsWith(filter.toLowerCase());\n                })\n                .map((item) => (\n                    <h4 key={item.id}>\n                        <Link to={`/blog/${item.id}`}>\n                            {item.id} - {item.title}\n                        </Link>\n                    </h4>\n                ))}\n        </div>\n    );\n};\n\nexport default Blog;\n')),(0,r.kt)("h2",{id:"netlify--queryparams"},"Netlify + queryParams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/56468161/netlify-does-not-recognize-the-url-params-when-using-react-router-dom"},"fuente")),(0,r.kt)("li",{parentName:"ul"},"Crear archivo ",(0,r.kt)("inlineCode",{parentName:"li"},"_redirects")," en ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," con:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/* /index.html 200")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")),(0,r.kt)("p",null,"Subir a netlify \ud83c\udf89 ",(0,r.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"https://www.netlify.com/ \ud83d\udc31\u200d\ud83c\udfcd")),(0,r.kt)("h2",{id:"proyecto-final"},"Proyecto Final"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bluuweb/router-v6-react-ejemplo-youtube"},"github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://determined-hoover-0ab8f7.netlify.app/"},"preview"))))}p.isMDXComponent=!0}}]);
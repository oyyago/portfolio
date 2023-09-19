import { useTranslation } from "react-i18next"


export default function Projects() {
    const { t } = useTranslation()
    return (
        <>
            <h1 style={{ fontSize: "50px" }}>{t("projectsT")}</h1>
            <p style={{ fontSize: "20px" }}>{t("projectsD")}</p>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <a href="" style={{marginRight:"90px"}}><img style={{ width: "320px" }} src="https://www.alura.com.br/assets/img/alura2023/home/formations-sub.1687365821.png" alt="" /></a>
                <a href="" style={{marginRight:"90px"}}><img style={{ width: "320px" }} src="https://www.alura.com.br/assets/img/alura2023/home/formations-sub.1687365821.png" alt="" /></a>
                <a href="" ><img style={{ width: "320px" }} src="https://www.alura.com.br/assets/img/alura2023/home/formations-sub.1687365821.png" alt="" /></a>
            </div>

        </>
    )
}
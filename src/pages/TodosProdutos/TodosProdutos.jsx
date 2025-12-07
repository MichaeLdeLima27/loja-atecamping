import { Container, Titulo, Grid, VerMais, VoltarHome } from "./styles";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function TodosProdutos() {
const produtos = [
{ id: 1, nome: "Barraca Camping Indy Nautika", preco: "R$1.079,90", imagem: "./barraca1.webp", link: "https://shopee.com.br/product/1314243679/23892824113?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDTHFpUkJvb3pjNVNQdGZ3SkQyWGptU1FLc0lVL1JiNGtvMkhZS0JIZUdRVFVzcy92U1BqUVIrQlVxbkJEL0JybHI4VG9QYmpLNnNsa3pKZGliYlRrUVVQZ0F1SUYzMjBGTDJheG1QNndwcFVHTU5xOCt0U1JtajdJR2tQYUl6MWFZPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54c9vsdm00b1&utm_campaign=id_Tm5XGS9BdH&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hcmdevdasq" },
{ id: 2, nome: "Cama Colchão Inflável Casal", preco: "R$698,00", imagem: "./colchao1.webp", link: "https://shopee.com.br/product/1316514850/23197716141?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDTHFpUkJvb3pjNVNQdGZ3SkQyWGptU3FiRG1YOFp4alhUUk1QbkJHL3FtWHdrbHBtQTUwc0NKVGRMM0JNS09uZ2huZ0JwVVBEQzdrSG1xdDNNNlhiSmUyejIrYmtKZGhRVWdydGpSZXM0WnIwUUpTQmY3RXJGbllPMDRWL3RPU1hNPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54ca1a1g02an&utm_campaign=id_YbZ6FUXotL&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hdpos58qz7" },
{ id: 3, nome: "Cafeteira Italiana", preco: "R$54,90", imagem: "./cafeteira.webp", link: "https://shopee.com.br/product/403286639/22692818534?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBM3dQWGZrT2t2T0VGN3E5Wm9TWDZta3pJZk4rN3AwTVNEOVFXVEpoOS9wc2lzbU9LaTkwNng2cGVoRUs2SkoyaHBGbWVhUXhnSzR1bWVyL1J3MW5ycVE3UWcwcU0wOWI4WXdGMkZJVFRvQVlXR1BLY2QwUXhZZFpVcE14a0xTNGJNPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54ca75g100br&utm_campaign=id_13Vn9muW2xL&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hi7yghzfbd" },
{ id: 4, nome: "Barraca JOYFOX", preco: "R$399,00", imagem: "./barraca3.webp", link: "https://shopee.com.br/product/1063922972/22197451706?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSUJ5WXF0M1hibXZVc05TR2ZGbGpSV2ZCNGxCdFJUSWJDQTRwV0ZnS0EvUDhwVGdMNnBpWkdoemVBUlp5ZlQwUzZ0VHB4eGVub0ttQXgxTHB6VmxWR0VQK0FJWU9YUndSYVZjZTkyUWgzZ2ZCYUJnZE40TStTSjdOL0FGd0tHMjJVPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54ca7qlc00bo&utm_campaign=id_HBrqvVRsTH&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hiq9zuk3om" },
{ id: 5, nome: "Mesa Portátil Dobrável", preco: "R$109,00", imagem: "./mesa1.webp", link: "https://shopee.com.br/product/1321451938/24390899032?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSURjbkI5VWw0Y2NsWjR6cTMyNENvK2hjYi9kSGVuSnNFZTk4NkdhVmlXZWM1WDZFZWxrSnBlS1RvR1QzUEsvcmpCeU8xQ3NXZ2tpQ0JXeTZlWmx4b0lhOGVJNWxxdWNYelpVa0tOM2VGaE44RXN6QXNRTnZEYWUyUXUzb1V0aWEwPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54cahgje00dv&utm_campaign=id_ndCiuSE4fP&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hr6q4tsre3" },
{ id: 6, nome: "Chaleira Inox ", preco: "R$89,90", imagem: "./chaleira1.webp", link: "https://shopee.com.br/product/392003162/19199333369?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMmt3TktSUUpVdG1IRFR5aTlueGdSRWtrdzhJckZTLzJGUThmcGlwam1sSHI3QkdaMEovYmw0bkt6YlpDdWk1aGhnS0xObGo3TXkrdlZXaUg0OHlLWEZnYmpZOSs4SGR1WGxFM1c3NHNmK09ZcldTcGhqdnMrRjB6QkQrNWVKcFI0PQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54cagqdf00bn&utm_campaign=id_ywkrEgttUV&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hqnk9juv71" },
{ id: 7, nome: "Poltrona e Puff Inflável", preco: "R$89,99", imagem: "./poltrona1.webp", link: "https://shopee.com.br/opaanlp/378486098/21268606146?__mobile__=1&exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMUtwZHNKa2NpZXJRNUwyZnRnUnpzb3ZyZWEzclorL2YzUDh2N3dxSmFhdGxCWWtLQVE2Sm9IYVByWTd1VFI1blREOXFsR1JtRk1ISCtaSTRjWkFGNGNjNzQzVU5DOW5ha25GYmp2MlAwVXJ5UzVNazQxMTY3cHlvTUo1SWxMY0JZPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54cahebj00bq&utm_campaign=id_LqAaUsIrhP&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hr4vpizz6t" },
{ id: 8, nome: "Estante Multiuso duplo", preco: "R$78,00", imagem: "./prateleira1.webp", link: "https://shopee.com.br/product/302367677/22822787685?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMm10MUZKcVlkcXZIeXJtM0ovaEFBV3o5Z01VWm9FV01TYUdVZlMrakl6bjYycWViL1JYSFMzMUtlM0o5c3NvME55UDdjZWRSZUp1U0VINFFZelBUR1J6dk5hVHdtRWJvV1BrNDZwQUlVRmlTOXluOC9wQVV6TnRpbWV5ZW5Xd01vPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54cagba300bq&utm_campaign=id_12GIH0UIj6l&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3hqa8b2sy1y" },
/*{ id: 9, nome: "Lanterna LED de Cabeça", preco: "R$59,90", imagem: "./lanterna2.webp", link: "#" },
{ id: 10, nome: "Kit Talheres Camping", preco: "R$29,90", imagem: "./talheres1.webp", link: "#" },
{ id: 11, nome: "Barraca 4 Pessoas", preco: "R$399,90", imagem: "./barraca2.webp", link: "#" },
{ id: 12, nome: "Cantil de Água 2L", preco: "R$49,90", imagem: "./cantil1.webp", link: "#" },
{ id: 13, nome: "Isolante Térmico Dobrável", preco: "R$79,90", imagem: "./isolante1.webp", link: "#" },
{ id: 14, nome: "Fogareiro Elétrico Portátil", preco: "R$179,90", imagem: "./fogareiro3.webp", link: "#" },
{ id: 15, nome: "Kit Panelas Camping", preco: "R$129,90", imagem: "./panelas1.webp", link: "#" },
{ id: 16, nome: "Mochila Hidratação 3L", preco: "R$149,90", imagem: "./mochila2.webp", link: "#" },
{ id: 17, nome: "Lanterna Solar Recarregável", preco: "R$89,90", imagem: "./lanterna3.webp", link: "#" },
{ id: 18, nome: "Barraca 3 Pessoas", preco: "R$349,90", imagem: "./barraca3.webp", link: "#" },
{ id: 19, nome: "Rede de Camping Portátil", preco: "R$119,90", imagem: "./rede1.webp", link: "#" },
{ id: 20, nome: "Kit Acampamento Completo", preco: "R$499,90", imagem: "./kit1.webp", link: "#" }*/
];

return ( <Container> <Titulo>
Seja bem-vindo à nossa loja de afiliados da Shopee! <span>Aqui você encontra tudo para seu camping ser perfeito e sem perrengue!</span> </Titulo>


<Grid>
    {produtos.map((p) => (
    <ProductCard key={p.id} produto={p} />
    ))}
</Grid>

<VoltarHome href="/">Voltar à Home</VoltarHome>
</Container>

);
}

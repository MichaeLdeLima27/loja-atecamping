import { Container, Titulo, Grid, VerMais } from "./styles";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Cadeira Dobrável Camping",
      preco: "R$119,99 - R$129,99",
      imagem: "./cadeira2.webp",
      link: "https://shopee.com.br/product/336190393/22497444891?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMnFlWkNtU0VBZHF5OXhsaUdJdWJGNWxra2hGRGRldGNuYmtuSkszejhCcmZxTHRoQ3F1UjE1R3JucFZxRU1FQVFYWHlzVXdVam5HckNQSGQxRWxzblpzbHB0N3k0d0NPbHRvd1RtTTE2NkVBQXNmODlUZXBkYnZqQTF3WkdIcEhNPQ&mmp_pid=an_18366300177&uls_trackid=54c9nbsf00aq&utm_campaign=id_K8u8lmgzRP&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3h62i5rzeo9" 
    },
    {
      id: 2,
      nome: "Fogareiro Fogão Portátil a Gás",
      preco: "R$ 159,00",
      imagem: "./fogareiro1.png",
      link: "https://shopee.com.br/product/467921127/23592989375?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBM2g2blBEOGw2WGQ2b3o2YXdObGNKd1dPK3RaSGRRVTl0cTRIVnFkK0dZV29ESmZiejNYSHpCZHQ5cklUb2FMenpsdFVCMXVidmxNRVJJeEdBMmVZblRvVWozdXVHZ0ZtZFFaUHJFMUt1OXpOaEpRcVZWRHh1Umk5ODRoUE9TY0xZPQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54c9o31501br&utm_campaign=id_pSHsForFXb&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3h6mfoqufps"
    },
    {
      id: 3,
      nome: "Lanterna de Camping Recarregável - Retro",
      preco: "R$ 39,90",
      imagem: "./lamparina1.webp",
      link: "https://shopee.com.br/product/1102739365/22097352884?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSmZWZ1lwdmtFYW80QlkvNHlwemREdmtySUlHTjc0NlZmZ1lyYU9XNHdwL2ZkTHNmdE45K3pBbjFHWDh2ZTJwY0Z1ZDAwZi9nNEUvSERrUmEwS2xZQURDT2JQMVZhWXcwb0V6a0xVM2c2aGlOT2ZMUEx5Zko3QklDenBpOXYzWTg0PQ&mmp_pid=an_18366300177&share_channel_code=1&uls_trackid=54c9og1i00an&utm_campaign=id_ypsf8ZGftn&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3h6x3g8t7hy"
    },
    {
      id: 4,
      nome: "Caixa Termica Cooler",
      preco: "R$ 79,90",
      imagem: "./termica1.png",
      link: "https://shopee.com.br/product/1053369040/19998276241?exp_group=mvp&gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSVovcnV5d2t4RjhUVkM3RFlRUXE4MWpRdFdzNUdKc2doTjNVNVRiVmZaUUNXZUxvcVY2TElxcU1zQkVoWGhKNUZaNmIxZ0w2Uk1mc2N4MlBFWGdMR093cWJGZkgrR3ZrcUVCdWU1WDdZY3hIekZyL2QrZ0lqcWZJWStNYmlYMk1rPQ&mmp_pid=an_18366300177&uls_trackid=54c9osdp00dv&utm_campaign=id_mWNxCMvKLv&utm_content=----&utm_medium=affiliates&utm_source=an_18366300177&utm_term=e3h787pohye7"
    }
  ];

  return (
    <Container id="produtos">
      <Titulo>
        Seja bem-vindo à nossa loja de afiliados da Shopee!  
        <span>Aqui você encontra tudo para seu camping ser perfeito e sem perrengue!</span>
      </Titulo>

      <Grid>
        {produtos.map((p) => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </Grid>

      <VerMais href="/produtos">Ver mais produtos</VerMais>
    </Container>
  );
}

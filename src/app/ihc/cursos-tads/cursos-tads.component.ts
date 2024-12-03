import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos-tads',
  templateUrl: './cursos-tads.component.html',
  styleUrl: './cursos-tads.component.css'
})
export class CursosTadsComponent {

  cursos = [
    { nome: 'TADS - Análise e Desenvolvimento de Sistemas', imagem: 'assets/imagens/tads_logo.png', link: 'https://link-do-curso1.com' },
    { nome: 'TCI - Comunicação Institucional', imagem: 'assets/imagens/tci_logo.png', link: 'http://www.sept.ufpr.br/portal/comunicacaoinstitucional/sobre-o-curso/' },
    { nome: 'TGQ - Gestão da Qualidade', imagem: 'assets/imagens/tgq_logo.png', link: 'http://www.sept.ufpr.br/portal/gestaoqualidade/sobre-o-curso/' },
    { nome: 'TGP - Gestão Pública', imagem: 'assets/imagens/tgp_logo.png', link: 'http://www.sept.ufpr.br/portal/gestaopublica/' },
    { nome: 'TL - Luteria', imagem: 'assets/imagens/tl_logo.png', link: 'http://www.sept.ufpr.br/portal/luteria/sobre-o-curso/' },
    { nome: 'TNI - Negócios Imobiliários', imagem: 'assets/imagens/tni_logo.png', link: 'http://www.sept.ufpr.br/portal/negociosimobiliarios/sobre-o-curso/' },
    { nome: 'TPC - Produção Cênica', imagem: 'assets/imagens/tpc_logo.png', link: 'http://www.sept.ufpr.br/portal/producaocenica/sobre-o-curso/' },
    { nome: 'TS - Secretariado', imagem: 'assets/imagens/ts_logo.png', link: 'http://www.sept.ufpr.br/portal/secretariado/sobre-o-curso/' }
  ];
}

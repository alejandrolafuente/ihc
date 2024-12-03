import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-formados',
  templateUrl: './lista-formados.component.html',
  styleUrl: './lista-formados.component.css'
})
export class ListaFormadosComponent {

  alunos = [
    { nome: 'Ana Clara', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'João Pedro', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Maria Fernanda', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Gabriel Souza', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Lucas Almeida', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Julia Ramos', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Isabela Martins', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Matheus Lima', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Luiza Costa', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Felipe Oliveira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Sofia Mendes', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Rafael Nunes', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Carolina Torres', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Bruno Silva', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Mariana Souza', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Diego Pereira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Larissa Almeida', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Thiago Lima', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Beatriz Carvalho', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Leonardo Oliveira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Camila Santos', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Eduardo Costa', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Gabriela Nunes', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Pedro Henrique', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Vanessa Moura', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Rodrigo Antunes', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Letícia Cardoso', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Marcelo Vieira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Fernanda Silva', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Vinícius Ramos', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Paula Borges', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'André Gonçalves', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Jessica Moreira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Hugo Martins', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Carla Silva', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Alexandre Lima', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Tatiana Alves', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Fábio Ferreira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Renata Monteiro', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Antonio Medeiros', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Daniela Vieira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Rafael Oliveira', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Patrícia Correia', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Sergio Barbosa', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Cecília Duarte', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2020, anoFormatura: 2024 },
    { nome: 'Ricardo Lima', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2019, anoFormatura: 2023 },
    { nome: 'Marta Coelho', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2018, anoFormatura: 2022 },
    { nome: 'Maurício Almeida', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2017, anoFormatura: 2021 },
    { nome: 'Cláudia Rocha', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 },
    { nome: 'Francisco Assis', nomeCurso: 'Pós Graduação em Bioinformática', anoIngresso: 2016, anoFormatura: 2020 }
  ];

  paginaAtual = 1;
  alunosPorPagina = 10;

  get alunosPaginados() {
    const inicio = (this.paginaAtual - 1) * this.alunosPorPagina;
    return this.alunos.slice(inicio, inicio + this.alunosPorPagina);
  }

  get totalPaginas() {
    return Math.ceil(this.alunos.length / this.alunosPorPagina);
  }

  alterarPagina(delta: number) {
    this.paginaAtual += delta;
  }
}

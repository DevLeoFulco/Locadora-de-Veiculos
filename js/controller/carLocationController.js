alugaCarro.controller("alugarCarroCtrl", function ($scope) {
  $scope.nomeAplicacao = "Car Location";
  $scope.carros = [
    {
      marca: "Chevrolet",
      placa: "ABC-1515",
      tipo: "Hatch",
      modelo: "Onix",
      cor: "Preto",
      anoModelo: "2022",
      combustivel: "Flex",
      dataInclusao: new Date(),
      valorDiaria: 80,
    },
    {
      marca: "Chevrolet",
      placa: "DEF-1010",
      tipo: "Picape",
      modelo: "Blazer",
      cor: "Prata",
      anoModelo: "2021",
      combustivel: "Diesel",
      dataInclusao: new Date(),
      valorDiaria: 145,
    },
    {
      marca: "Ford",
      placa: "GHI-2020",
      tipo: "Hatch",
      modelo: "Fiesta Hatch",
      cor: "Branco",
      anoModelo: "2023",
      combustivel: "Flex",
      dataInclusao: new Date(),
      valorDiaria: 75,
    },
    {
      marca: "Fiat",
      placa: "JKL-2121",
      tipo: "Sedan",
      modelo: "Cronus",
      cor: "Vermelho",
      anoModelo: "2023",
      combustivel: "Flex",
      dataInclusao: new Date(),
      valorDiaria: 80,
    },
    {
      marca: "Honda",
      placa: "MNO-1212",
      tipo: "Sedan",
      modelo: "City",
      cor: "Cinza",
      anoModelo: "2022",
      combustivel: "Flex",
      dataInclusao: new Date(),
      valorDiaria: 120,
    },
    {
      marca: "Toyota",
      placa: "PQR-5050",
      tipo: "Hatch",
      modelo: "Ethios",
      cor: "Roxo",
      anoModelo: "2020",
      combustivel: "Flex",
      dataInclusao: new Date(),
      valorDiaria: 60,
    },
    {
      marca: "Wolksvagem",
      placa: "STU-7788",
      tipo: "Sedan",
      modelo: "Voyagem",
      cor: "Prata",
      anoModelo: "2022",
      combustivel: "Flex",
      dataInclusao: new Date(),
      valorDiaria: 80,
    },
  ];

  $scope.marcas = [
    { codigoMarca: 1, nomeMarca: "Chevrolet" },
    { codigoMarca: 2, nomeMarca: "Ford" },
    { codigoMarca: 3, nomeMarca: "Volkswagem" },
    { codigoMarca: 4, nomeMarca: "Fiat" },
    { codigoMarca: 5, nomeMarca: "Honda" },
    { codigoMarca: 6, nomeMarca: "Toyota" },
    { codigoMarca: 7, nomeMarca: "Audi" },
    { codigoMarca: 8, nomeMarca: "BMW" },
    { codigoMarca: 9, nomeMarca: "Renault" },
    { codigoMarca: 10, nomeMarca: "Cinttroen" },
  ];
  $scope.cores = [
    { codigoCor: 1, nomeCor: "Branco" },
    { codigoCor: 2, nomeCor: "Preto" },
    { codigoCor: 3, nomeCor: "Vermelho" },
    { codigoCor: 4, nomeCor: "Prata" },
    { codigoCor: 5, nomeCor: "Cinza" },
    { codigoCor: 6, nomeCor: "Azul" },
    { codigoCor: 7, nomeCor: "Dourado" },
    { codigoCor: 8, nomeCor: "Vinho" },
  ];
  $scope.tipos = [
    {
      codigoTipo: 1,
      nomeTipo: "Hatc",
      classeVeiculo: "Carro de passeio",
    },
    {
      codigoTipo: 2,
      nomeTipo: "Cupê",
      classeVeiculo: "Carro de passeio",
    },
    {
      codigoTipo: 3,
      nomeTipo: "Sedan",
      classeVeiculo: "Carro de passeio",
    },
    {
      codigoTipo: 4,
      nomeTipo: "Perua",
      classeVeiculo: "Carro de passeio",
    },
    { codigoTipo: 5, nomeTipo: "Picape", classeVeiculo: "Utilitário" },
    { codigoTipo: 6, nomeTipo: "Van", classeVeiculo: "Utilitário" },
    { codigoTipo: 7, nomeTipo: "Minivan", classeVeiculo: "Utilitário" },
    { codigoTipo: 8, nomeTipo: "SUV", classeVeiculo: "Utilitário" },
    { codigoTipo: 9, nomeTipo: "Esportivo", classeVeiculo: "Luxo" },
    {
      codigoTipo: 10,
      nomeTipo: "Compacto",
      classeVeiculo: "Carro de passeio",
    },
  ];
  $scope.combustiveis = [
    { codigoCombustivel: 1, nomeCombustivel: "Gasolina" },
    { codigoCombustivel: 2, nomeCombustivel: "Alcool" },
    { codigoCombustivel: 3, nomeCombustivel: "Diesel" },
    { codigoCombustivel: 4, nomeCombustivel: "GNV" },
    { codigoCombustivel: 5, nomeCombustivel: "Flex" },
    { codigoCombustivel: 6, nomeCombustivel: "Hibrido" },
    { codigoCombustivel: 7, nomeCombustivel: "Eletrico" },
  ];

  $scope.adicionarCarro = function (carro) {
    carro.dataInclusao = new Date();
    $scope.carros.push(carro);
    delete $scope.carro;
    $scope.CadastroVeiculo.$setPristine();
  };
});

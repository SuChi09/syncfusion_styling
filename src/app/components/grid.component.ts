import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid",
  template: `
    <ejs-grid
      [dataSource]="data"
      height="320"
      width="1000"
      [allowFiltering]="true"
      [filterSettings]="filterSettings"
      [allowResizing]="true"
      [allowSelection]="false"
      [allowSorting]="true"
    >
      <e-columns>
        <e-column
          field="OrderID"
          headerText="Order ID"
          textAlign="Right"
          width="90"
          freeze="Left"
        ></e-column>
        <e-column
          field="CustomerID"
          headerText="Customer ID"
          width="120"
        ></e-column>
        <e-column
          field="EmployeeID"
          headerText="Employee ID"
          width="120"
        ></e-column>
        <e-column
          field="ShipName"
          headerText="Ship Name"
          width="120"
        ></e-column>
        <e-column
          field="ShipCity"
          headerText="Ship City"
          width="120"
        ></e-column>
        <e-column
          field="ShipAddress"
          headerText="Ship Address"
          width="120"
        ></e-column>
        <e-column
          field="Freight"
          headerText="Freight"
          textAlign="Right"
          format="C2"
          width="90"
        ></e-column>
        <e-column
          field="OrderDate"
          headerText="Order Date"
          textAlign="Right"
          format="yMd"
          width="120"
          freeze="Right"
        ></e-column>
        <e-column
          field="ShipCountry"
          headerText="Ship Country"
          textAlign="Right"
          width="120"
          freeze="Right"
        ></e-column>
      </e-columns>
    </ejs-grid>
  `,
  styles: []
})
export class GridComponent implements OnInit {
  public data: object[];

  readonly filterSettings: any = {
    type: "Excel"
  };

  ngOnInit(): void {
    this.data = [
      {
        OrderID: 10248,
        CustomerID: "VINET",
        EmployeeID: 5,
        OrderDate: new Date(8364186e5),
        ShipName: "Vins et alcools Chevalier",
        ShipCity: "Reims",
        ShipAddress: "59 rue de l Abbaye",
        ShipRegion: "CJ",
        ShipPostalCode: "51100",
        ShipCountry: "France",
        Freight: 32.38,
        Verified: !0
      },
      {
        OrderID: 10249,
        CustomerID: "TOMSP",
        EmployeeID: 6,
        OrderDate: new Date(836505e6),
        ShipName: "Toms Spezialit??ten",
        ShipCity: "M??nster",
        ShipAddress: "Luisenstr. 48",
        ShipRegion: "CJ",
        ShipPostalCode: "44087",
        ShipCountry: "Germany",
        Freight: 11.61,
        Verified: !1
      },
      {
        OrderID: 10250,
        CustomerID: "HANAR",
        EmployeeID: 4,
        OrderDate: new Date(8367642e5),
        ShipName: "Hanari Carnes",
        ShipCity: "Rio de Janeiro",
        ShipAddress: "Rua do Pa??o, 67",
        ShipRegion: "RJ",
        ShipPostalCode: "05454-876",
        ShipCountry: "Brazil",
        Freight: 65.83,
        Verified: !0
      },
      {
        OrderID: 10251,
        CustomerID: "VICTE",
        EmployeeID: 3,
        OrderDate: new Date(8367642e5),
        ShipName: "Victuailles en stock",
        ShipCity: "Lyon",
        ShipAddress: "2, rue du Commerce",
        ShipRegion: "CJ",
        ShipPostalCode: "69004",
        ShipCountry: "France",
        Freight: 41.34,
        Verified: !0
      },
      {
        OrderID: 10252,
        CustomerID: "SUPRD",
        EmployeeID: 4,
        OrderDate: new Date(8368506e5),
        ShipName: "Supr??mes d??lices",
        ShipCity: "Charleroi",
        ShipAddress: "Boulevard Tirou, 255",
        ShipRegion: "CJ",
        ShipPostalCode: "B-6000",
        ShipCountry: "Belgium",
        Freight: 51.3,
        Verified: !0
      },
      {
        OrderID: 10253,
        CustomerID: "HANAR",
        EmployeeID: 3,
        OrderDate: new Date(836937e6),
        ShipName: "Hanari Carnes",
        ShipCity: "Rio de Janeiro",
        ShipAddress: "Rua do Pa??o, 67",
        ShipRegion: "RJ",
        ShipPostalCode: "05454-876",
        ShipCountry: "Brazil",
        Freight: 58.17,
        Verified: !0
      },
      {
        OrderID: 10254,
        CustomerID: "CHOPS",
        EmployeeID: 5,
        OrderDate: new Date(8370234e5),
        ShipName: "Chop-suey Chinese",
        ShipCity: "Bern",
        ShipAddress: "Hauptstr. 31",
        ShipRegion: "CJ",
        ShipPostalCode: "3012",
        ShipCountry: "Switzerland",
        Freight: 22.98,
        Verified: !1
      },
      {
        OrderID: 10255,
        CustomerID: "RICSU",
        EmployeeID: 9,
        OrderDate: new Date(8371098e5),
        ShipName: "Richter Supermarkt",
        ShipCity: "Gen??ve",
        ShipAddress: "Starenweg 5",
        ShipRegion: "CJ",
        ShipPostalCode: "1204",
        ShipCountry: "Switzerland",
        Freight: 148.33,
        Verified: !0
      },
      {
        OrderID: 10256,
        CustomerID: "WELLI",
        EmployeeID: 3,
        OrderDate: new Date(837369e6),
        ShipName: "Wellington Importadora",
        ShipCity: "Resende",
        ShipAddress: "Rua do Mercado, 12",
        ShipRegion: "SP",
        ShipPostalCode: "08737-363",
        ShipCountry: "Brazil",
        Freight: 13.97,
        Verified: !1
      },
      {
        OrderID: 10257,
        CustomerID: "HILAA",
        EmployeeID: 4,
        OrderDate: new Date(8374554e5),
        ShipName: "HILARION-Abastos",
        ShipCity: "San Crist??bal",
        ShipAddress: "Carrera 22 con Ave. Carlos Soublette #8-35",
        ShipRegion: "T??chira",
        ShipPostalCode: "5022",
        ShipCountry: "Venezuela",
        Freight: 81.91,
        Verified: !0
      },
      {
        OrderID: 10258,
        CustomerID: "ERNSH",
        EmployeeID: 1,
        OrderDate: new Date(8375418e5),
        ShipName: "Ernst Handel",
        ShipCity: "Graz",
        ShipAddress: "Kirchgasse 6",
        ShipRegion: "CJ",
        ShipPostalCode: "8010",
        ShipCountry: "Austria",
        Freight: 140.51,
        Verified: !0
      },
      {
        OrderID: 10259,
        CustomerID: "CENTC",
        EmployeeID: 4,
        OrderDate: new Date(8376282e5),
        ShipName: "Centro comercial Moctezuma",
        ShipCity: "M??xico D.F.",
        ShipAddress: "Sierras de Granada 9993",
        ShipRegion: "CJ",
        ShipPostalCode: "05022",
        ShipCountry: "Mexico",
        Freight: 3.25,
        Verified: !1
      },
      {
        OrderID: 10260,
        CustomerID: "OTTIK",
        EmployeeID: 4,
        OrderDate: new Date(8377146e5),
        ShipName: "Ottilies K??seladen",
        ShipCity: "K??ln",
        ShipAddress: "Mehrheimerstr. 369",
        ShipRegion: "CJ",
        ShipPostalCode: "50739",
        ShipCountry: "Germany",
        Freight: 55.09,
        Verified: !0
      },
      {
        OrderID: 10261,
        CustomerID: "QUEDE",
        EmployeeID: 4,
        OrderDate: new Date(8377146e5),
        ShipName: "Que Del??cia",
        ShipCity: "Rio de Janeiro",
        ShipAddress: "Rua da Panificadora, 12",
        ShipRegion: "RJ",
        ShipPostalCode: "02389-673",
        ShipCountry: "Brazil",
        Freight: 3.05,
        Verified: !1
      },
      {
        OrderID: 10262,
        CustomerID: "RATTC",
        EmployeeID: 8,
        OrderDate: new Date(8379738e5),
        ShipName: "Rattlesnake Canyon Grocery",
        ShipCity: "Albuquerque",
        ShipAddress: "2817 Milton Dr.",
        ShipRegion: "NM",
        ShipPostalCode: "87110",
        ShipCountry: "USA",
        Freight: 48.29,
        Verified: !0
      }
    ];
  }
}

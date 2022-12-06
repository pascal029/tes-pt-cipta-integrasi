## Endpoints :

List of available endpoints:

- `GET /bookingkamaroperasi/:bookingdate/:durasi`
- `POST /hitunggaji`
- `POST /validasialergiobat`
- `GET /calculateage/:dateofbirth`

&nbsp;

## 1. GET /bookingkamaroperasi/:bookingdate/:durasi

params bookingdate : YYYY-MM-DD-HH-MM

_Response (200 - OK)_

```json
true
```

_Response (400 - Bad Request)_

```json
false
```

## 2. POST /hitunggaji

Request :

-body :

```json
{
    employee : {
        simbol : string,
        kewarganegaraan : string
    },
    komponengaji : [
        {
            gajiBersih : integer,

        }, {
            asuransi : integer
        }
    ]
}
```

_Response - (200 - OK)_

```json
"string gaji"
```

## 3. POST /validasialergiobat

Request :

-body :

```json
{
  "pasien": {
    "alergi": "kandungan dalam obat"
  },
  "resep": [{ "nama obat": "jumlah obat" }, ...]
}
```

_Response - (200 - OK)_

```json
{
    "resep" : [ { "obat" : "string nama obat"}, ...]
}
```

## 4. GET /calculateage/:dateofbirth

Request params = dateofbirth : DD-MM-YYYY

_Response - (200 - OK)_

```json
{
    "umur": {
        "year": integer,
        "month": integer,
        "day": integer
    }
}
```

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

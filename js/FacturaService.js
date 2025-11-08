// import { Factura } from './modelo/factura/Factura.js';
// const tiposIdentificacion = { "Cédula de Ciudadanía": "CC", "NIT": "NI", "Tarjeta de Identidad": "TI", "Pasaporte": "PA", "Tarjeta de Extranjería": "TE", "Cédula de Extranjería": "CE", "Registro Civil de Nacimiento": "RC", "NIT de otro país": "NO", "NUIP": "NU", "Permiso Especial de Permanencia": "PE", "Documento de Identificación Extranjero": "DE", "Permiso de Protección Temporal": "PT" };
// const formasPago = { "Contado": 1, "Crédito": 2 };
// const naturaleza = { "Persona natural": "NATURAL", "Persona jurídica": "JURIDICA" };
// const responsabilidadesFiscales = { "Gran contribuyente": "GRC", "Autorretenedor": "ART", "Agente de retención en el impuesto sobre las ventas": "RIV", "Régimen de tributación- SIMPLE": "RST", "No aplica – Otros": "NOA" };
// const responsabilidadesTributarias = { "Impuesto al valor agregado": "IVA", "Impuesto Nacional al Consumo": "INC", "IVA + INC": "IEC", "No aplica (ZZ)": "ZZ" };
// const unidad = { "Unidad": "94", "Pieza": "94", "Centímetro": "CMT", "Metro": "MTR", "Pulgada": "INH", "Centímetro cuadrado": "CMK", "Metro cuadrado (m2)": "MTK", "Pulgada cuadrada": "INK", "Mililitro": "MLT", "Litro": "LTR", "Galón": "A76", "Gramo": "GGR", "Kilogramo": "KGM", "Tonelada": "54", "Libra": "LBR", "Servicio": "94", "Centímetro Cúbico (cm3)": "CMQ", "Metro Cúbico": "MTQ" };
// const tiposImpuesto = { "Impuesto sobre las Ventas": "IVA", "Impuesto al Consumo Departamental Nominal": "ICDN", "Impuesto de Industria, Comercio y Aviso": "ICA", "Impuesto Nacional al Consumo": "INC", "Retención sobre el IVA": "RIVA", "Retención sobre Renta": "RRENT", "Retención sobre el ICA": "RICA", "Impuesto al Consumo Departamental Porcentual": "ICPD", "Cuota de Fomento Hortifrutícula": "FHCUL", "Impuesto de Timbre": "TIM", "Impuesto Nacional al Consumo de Bolsa Plástica": "INCB", "Impuesto Nacional del Carbono": "INCAR", "Impuesto Nacional a los Combustibles": "INCOM", "Sobretasa a los combustibles": "STC", "Contribución minoristas (Combustibles)": "SDCOM", "Impuesto al Consumo de Datos": "ICDA", "Impuesto al Consumo de Licores": "ICL", "Impuesto nacional productos plásticos": "INPP", "Impuesto a las bebidas ultraprocesadas azucaradas": "IBUA", "Impuesto a los productos comestibles ultraprocesados industrialmente y/o con alto contenido de azúcares añadidos, sodio o grasas saturadas": "ICUI", "AD VALOREM": "ADV", "Otros tributos, tasas, contribuciones, y similares": "ZZ" };
// const condicionesTributarias = { "Exento": { tipo: "EXE", claseImpuesto: "PO", tarifaTributo: 0 }, "Excluido": { tipo: "EXC", claseImpuesto: "PO", tarifaTributo: 0 }, "Gravado": {}};
// const claseImpuesto = {"Impuesto de Tipo Nominal": "NM", "Impuesto de Tipo Porcentual": "PO"};
// const condicionDescuentoCargo = {"No condicionado": "00", "Condicionado": "01"};

const tiposIdentificacion = [{ nombre: "Cédula de Ciudadanía", codigo: "CC" }, { nombre: "NIT", codigo: "NI" }, { nombre: "Tarjeta de Identidad", codigo: "TI" }, { nombre: "Pasaporte", codigo: "PA" }, { nombre: "Tarjeta de Extranjería", codigo: "TE" }, { nombre: "Cédula de Extranjería", codigo: "CE" }, { nombre: "Registro Civil de Nacimiento", codigo: "RC" }, { nombre: "NIT de otro país", codigo: "NO" }, { nombre: "NUIP", codigo: "NU" }, { nombre: "Permiso Especial de Permanencia", codigo: "PE" }, { nombre: "Documento de Identificación Extranjero", codigo: "DE" }, { nombre: "Permiso de Protección Temporal", codigo: "PT" }];
const mediosPago = [{ nombre: "Acuerdo mutuo", codigo: "ZZZ" }, { nombre: "Efectivo", codigo: "10" }, { nombre: "Consignación bancaria", codigo: "42" }, { nombre: "Tarjeta crédito", codigo: "30" }, { nombre: "Tarjeta Débito", codigo: "49" }, { nombre: "Bonos", codigo: "71" }, { nombre: "Bookentry Crédito", codigo: "15" }, { nombre: "Bookentry Débito", codigo: "16" }, { nombre: "Cheque", codigo: "20" }, { nombre: "Cheque bancario", codigo: "23" }, { nombre: "Cheque certificado", codigo: "25" }, { nombre: "Cheque Local", codigo: "26" }, { nombre: "Cheque local transferible", codigo: "92" }, { nombre: "Clearing entre partners", codigo: "97" }, { nombre: "Clearing Nacional o Regional", codigo: "9" }, { nombre: "Concentración de la demanda en efectivo / Desembolso (CCD) débito", codigo: "18" }, { nombre: "Concentración de la demanda en efectivo /Desembolso Crédito (CCD)", codigo: "17" }, { nombre: "Concentración Efectivo / Desembolso Crédito plus (CCD+)", codigo: "32" }, { nombre: "Concentración efectivo / Desembolso Débito plus (CCD+)", codigo: "43" }, { nombre: "Concentración Efectivo / Desembolso Débito plus (CCD+)", codigo: "33" }, { nombre: "Concentración efectivo ahorros / Desembolso Crédito (CCD)", codigo: "35" }, { nombre: "Concentración efectivo ahorros / Desembolso Drédito (CCD)", codigo: "36" }, { nombre: "Concentración efectivo/Desembolso Crédito plus (CCD+)", codigo: "41" }, { nombre: "Crédito ACH", codigo: "2" }, { nombre: "Crédito Ahorro", codigo: "13" }, { nombre: "Crédito de demanda ACH", codigo: "6" }, { nombre: "Crédito Negocio Intercambio Corporativo (CTX)", codigo: "28" }, { nombre: "Crédito Negocio Intercambio Corporativo (CTX) (otro)", codigo: "39" }, { nombre: "Crédito Pago negocio corporativo (CTP)", codigo: "19" }, { nombre: "Débito ACH", codigo: "3" }, { nombre: "Débito Ahorro", codigo: "14" }, { nombre: "Débito de demanda ACH", codigo: "7" }, { nombre: "Débito Negocio Intercambio Corporativo (CTX)", codigo: "40" }, { nombre: "Débito Negocio Intercambio Corporativo (CTX) (otro)", codigo: "29" }, { nombre: "Débito Pago Negocio Corporativo (CTP)", codigo: "27" }, { nombre: "Giro formato abierto", codigo: "95" }, { nombre: "Giro referenciado", codigo: "93" }, { nombre: "Giro urgente", codigo: "94" }, { nombre: "Instrumento no definido", codigo: "1" }, { nombre: "Mantener", codigo: "8" }, { nombre: "Método de pago solicitado no usado", codigo: "96" }, { nombre: "Nota bancaria transferible", codigo: "91" }, { nombre: "Nota cambiaria", codigo: "44" }, { nombre: "Nota cambiaria esperando aceptación", codigo: "24" }, { nombre: "Nota promisoria", codigo: "60" }, { nombre: "Nota promisoria firmada", codigo: "66" }, { nombre: "Nota promisoria firmada por el acreedor", codigo: "61" }, { nombre: "Nota promisoria firmada por el acreedor, avalada por el banco", codigo: "62" }, { nombre: "Nota promisoria firmada por el acreedor, avalada por un tercero", codigo: "63" }, { nombre: "Nota promisoria firmada por el banco", codigo: "64" }, { nombre: "Nota promisoria firmada por un banco avalada por otro banco", codigo: "65" }, { nombre: "Nota promisoria firmada por un tercero avalada por un banco", codigo: "67" }, { nombre: "Pago comercial urgente", codigo: "52" }, { nombre: "Pago Negocio Corporativo Ahorros Crédito (CTP)", codigo: "37" }, { nombre: "Pago Negocio Corporativo Ahorros Débito (CTP)", codigo: "38" }, { nombre: "Pago Tesorería Urgente", codigo: "53" }, { nombre: "Pago y depósito pre acordado (PPD)", codigo: "34" }, { nombre: "Postgiro", codigo: "50" }, { nombre: "Proyecto bancario", codigo: "21" }, { nombre: "Proyecto bancario certificado", codigo: "22" }, { nombre: "Retiro de nota por el acreedor", codigo: "70" }, { nombre: "Retiro de nota por el acreedor sobre un banco", codigo: "74" }, { nombre: "Retiro de nota por el acreedor, avalada por otro banco", codigo: "75" }, { nombre: "Retiro de nota por el acreedor, sobre un banco avalada por un tercero", codigo: "76" }, { nombre: "Retiro de una nota por el acreedor sobre un tercero", codigo: "77" }, { nombre: "Retiro de una nota por el acreedor sobre un tercero avalada por un banco", codigo: "78" }, { nombre: "Reversión Crédito Ahorro", codigo: "11" }, { nombre: "Reversión crédito de demanda ACH", codigo: "5" }, { nombre: "Reversión Débito Ahorro", codigo: "12" }, { nombre: "Reversión débito de demanda ACH", codigo: "4" }, { nombre: "Tarjeta Crédito", codigo: "48" }, { nombre: "Tarjeta débito", codigo: "31" }, { nombre: "Telex estándar bancario francés", codigo: "51" }, { nombre: "Transferencia Crédito Bancario", codigo: "45" }, { nombre: "Transferencia Débito Bancaria", codigo: "47" }, { nombre: "Transferencia Débito Interbancario", codigo: "46" }, { nombre: "Vales", codigo: "72" }];
const formasPago = [{ nombre: "Contado", codigo: 1 }, { nombre: "Crédito", codigo: 2 }];
const naturaleza = [{ nombre: "Persona natural", codigo: "NATURAL" }, { nombre: "Persona jurídica", codigo: "JURIDICA" }];
const responsabilidadesFiscales = [{ nombre: "Gran contribuyente", codigo: "GRC" }, { nombre: "Autorretenedor", codigo: "ART" }, { nombre: "Agente de retención en el impuesto sobre las ventas", codigo: "RIV" }, { nombre: "Régimen de tributación- SIMPLE", codigo: "RST" }, { nombre: "No aplica – Otros", codigo: "NOA" }];
const responsabilidadesTributarias = [{ nombre: "Impuesto al valor agregado", codigo: "IVA" }, { nombre: "Impuesto Nacional al Consumo", codigo: "INC" }, { nombre: "IVA + INC", codigo: "IEC" }, { nombre: "No aplica (ZZ)", codigo: "ZZ" }];
const unidad = [{ nombre: "Unidad", codigo: "94" }, { nombre: "Pieza", codigo: "94" }, { nombre: "Centímetro", codigo: "CMT" }, { nombre: "Metro", codigo: "MTR" }, { nombre: "Pulgada", codigo: "INH" }, { nombre: "Centímetro cuadrado", codigo: "CMK" }, { nombre: "Metro cuadrado (m2)", codigo: "MTK" }, { nombre: "Pulgada cuadrada", codigo: "INK" }, { nombre: "Mililitro", codigo: "MLT" }, { nombre: "Litro", codigo: "LTR" }, { nombre: "Galón", codigo: "A76" }, { nombre: "Gramo", codigo: "GGR" }, { nombre: "Kilogramo", codigo: "KGM" }, { nombre: "Tonelada", codigo: "54" }, { nombre: "Libra", codigo: "LBR" }, { nombre: "Servicio", codigo: "94" }, { nombre: "Centímetro Cúbico (cm3)", codigo: "CMQ" }, { nombre: "Metro Cúbico", codigo: "MTQ" }];
const tiposImpuesto = [{ nombre: "Impuesto sobre las Ventas", codigo: "IVA" }, { nombre: "Impuesto al Consumo Departamental Nominal", codigo: "ICDN" }, { nombre: "Impuesto de Industria, Comercio y Aviso", codigo: "ICA" }, { nombre: "Impuesto Nacional al Consumo", codigo: "INC" }, { nombre: "Retención sobre el IVA", codigo: "RIVA" }, { nombre: "Retención sobre Renta", codigo: "RRENT" }, { nombre: "Retención sobre el ICA", codigo: "RICA" }, { nombre: "Impuesto al Consumo Departamental Porcentual", codigo: "ICPD" }, { nombre: "Cuota de Fomento Hortifrutícula", codigo: "FHCUL" }, { nombre: "Impuesto de Timbre", codigo: "TIM" }, { nombre: "Impuesto Nacional al Consumo de Bolsa Plástica", codigo: "INCB" }, { nombre: "Impuesto Nacional del Carbono", codigo: "INCAR" }, { nombre: "Impuesto Nacional a los Combustibles", codigo: "INCOM" }, { nombre: "Sobretasa a los combustibles", codigo: "STC" }, { nombre: "Contribución minoristas (Combustibles)", codigo: "SDCOM" }, { nombre: "Impuesto al Consumo de Datos", codigo: "ICDA" }, { nombre: "Impuesto al Consumo de Licores", codigo: "ICL" }, { nombre: "Impuesto nacional productos plásticos", codigo: "INPP" }, { nombre: "Impuesto a las bebidas ultraprocesadas azucaradas", codigo: "IBUA" }, { nombre: "Impuesto a los productos comestibles ultraprocesados industrialmente y/o con alto contenido de azúcares añadidos, sodio o grasas saturadas", codigo: "ICUI" }, { nombre: "AD VALOREM", codigo: "ADV" }, { nombre: "Otros tributos, tasas, contribuciones, y similares", codigo: "ZZ" }];
const condicionesTributarias = [{ nombre: "Exento", tipo: "EXE", claseImpuesto: "PO", tarifaTributo: 0 }, { nombre: "Excluido", tipo: "EXC", claseImpuesto: "PO", tarifaTributo: 0 }, { nombre: "Gravado", tipo: "", claseImpuesto: "", tarifaTributo: "" }];
const claseImpuesto = [{ nombre: "Impuesto de Tipo Nominal", codigo: "NM" }, { nombre: "Impuesto de Tipo Porcentual", codigo: "PO" }];
const descuentoCargo = [{ nombre: "No condicionado", codigo: "00" }, { nombre: "Condicionado", codigo: "01" }];
const tiposDescuento = [{ nombre: "DESCUENTO", codigo: "DESCUENTO" }, { nombre: "RECARGO", codigo: "RECARGO" }];
const condicionImpuesto = [{ nombre: "GRAVADO", codigo: "GRA" }, { nombre: "EXCENTO", codigo: "EXE" }, { nombre: "EXCLUIDO", codigo: "EXC" }];
const esRegalo = [{ nombre: "NO", codigo: "false" }, { nombre: "SI", codigo: "true" }];
const ciudades = [{ nombre: "Pachavita", departamento: "Boyacá", codigo: "15511" }, { nombre: "Páez", departamento: "Boyacá", codigo: "15514" }, { nombre: "Paipa", departamento: "Boyacá", codigo: "15516" }, { nombre: "Pajarito", departamento: "Boyacá", codigo: "15518" }, { nombre: "Panqueba", departamento: "Boyacá", codigo: "15522" }, { nombre: "Pauna", departamento: "Boyacá", codigo: "15531" }, { nombre: "Paya", departamento: "Boyacá", codigo: "15533" }, { nombre: "Paz De Río", departamento: "Boyacá", codigo: "15537" }, { nombre: "Pesca", departamento: "Boyacá", codigo: "15542" }, { nombre: "Pisba", departamento: "Boyacá", codigo: "15550" }, { nombre: "Puerto Boyacá", departamento: "Boyacá", codigo: "15572" }, { nombre: "Quípama", departamento: "Boyacá", codigo: "15580" }, { nombre: "Ramiriquí", departamento: "Boyacá", codigo: "15599" }, { nombre: "Ráquira", departamento: "Boyacá", codigo: "15600" }, { nombre: "Rondón", departamento: "Boyacá", codigo: "15621" }, { nombre: "Saboyá", departamento: "Boyacá", codigo: "15632" }, { nombre: "Sáchica", departamento: "Boyacá", codigo: "15638" }, { nombre: "Samacá", departamento: "Boyacá", codigo: "15646" }];
let contadorAlert = 0;

/**  variable para el JSON  **/
// let factura = new Factura();
let factura = {};
factura.items = [];

/** Campos SELECT **/
let campoMediosPago = $('#mediosPago');
let campoFormasPago = $('#formaPago');
let campoTipoIdentificacion = $('#tipoIdentificacion');
let campoNaturaleza = $('#naturaleza');
let campoCiudad = $('#ciudad');
let campoRespFiscales = $('#responsabilidadesFiscales');
let campoRespTributarias = $('#respTributarias');
let campoEsRegalo = $('#esRegalo');
let campoCondicionImpuesto = $('#condicionImpuesto');
let campoTipoImpuesto = $('#tipoImpuesto');
let campoTipoDescuento = $('#tipoDescuento');
let campoCodDescuentosCargos = $('#codigoDescuentosCargos');
let campoClaseImpuesto = $('#claseImpuesto');
let campoUnidad = $("#unidad");

$(function () {
    llenarSelect(campoMediosPago, mediosPago);
    llenarSelect(campoFormasPago, formasPago);
    llenarSelect(campoTipoIdentificacion, tiposIdentificacion);
    llenarSelect(campoNaturaleza, naturaleza);
    llenarSelect(campoCiudad, ciudades);
    llenarSelect(campoRespFiscales, responsabilidadesFiscales);
    llenarSelect(campoRespTributarias, responsabilidadesTributarias);
    llenarSelect(campoEsRegalo, esRegalo);
    llenarSelect(campoCondicionImpuesto, condicionImpuesto);
    llenarSelect(campoTipoImpuesto, tiposImpuesto);
    llenarSelect(campoTipoDescuento, tiposDescuento);
    llenarSelect(campoCodDescuentosCargos, descuentoCargo);
    llenarSelect(campoClaseImpuesto, claseImpuesto);
    llenarSelect(campoUnidad, unidad);


    $('#condicionImpuesto').on('change', function () {
        const valorSeleccionado = $(this).val();
        const campoTarifa = $('#tarifaTributo');
        const campoFactor = $('#factor');
        let desabilitar = valorSeleccionado != "GRA";
        campoTipoImpuesto.attr('disabled', desabilitar);
        campoClaseImpuesto.attr('disabled', desabilitar);
        campoTarifa.attr('disabled', desabilitar);
        campoFactor.attr('disabled', desabilitar);
    });
});


function llenarSelect(campo, array) {
    array.forEach(function (objeto) {
        campo.append(`<option value="${objeto.codigo}">${objeto.nombre}</option>`)
    });
}

/** Funcionalidad para agregar impuestos Visualmente y del lado del cliente **/

$('#agregarImpuesto').on('click', function () {
    if (validarCamposImpuestos()) return;
    let crearCardImpuesto = true;
    let campoVacio = validarCamposVaciosImpuestos($("#tarifaTributo").val());;
    $('.tituloImpuesto').each(function () {
        crearCardImpuesto = validarExistenciaImpuesto($("#tipoImpuesto").val(), $(this).text());
    });
    if (!crearCardImpuesto || !campoVacio) {
        return;
    }
    let agregarExc = $('#condicionImpuesto').select().val() != "GRA";
    if (agregarExc) {
        let cardImpuesto = construirCardImpuesto($('#condicionImpuesto').val(), "PO", 0, 0);
        let cardsImpuesto = $("#cardsImpuesto");
        cardsImpuesto.append(cardImpuesto);
        return;
    }
    let tipoImpuestoLocal = $('#tipoImpuesto').val();
    let claseImpuestoLocal = $('#claseImpuesto').val();
    let tarifaLocal = $('#tarifaTributo').val();
    let factorLocal = $('#factor').val();
    let cardImpuesto = construirCardImpuesto(tipoImpuestoLocal, claseImpuestoLocal, tarifaLocal, factorLocal);
    let cardsImpuesto = $("#cardsImpuesto");
    cardsImpuesto.append(cardImpuesto);

});

function validarCamposImpuestos() {
    if ($('#tarifaTributo').val() === "") {
        mostrarMensaje("Llena los campos obligatorios de Impuesto.")
        $('#tarifaTributo').css("border-color", "red");
        setTimeout(() => {
            $('#tarifaTributo').css("border-color", "rgb(222, 226, 230)");
        }, 6000);
        return true;
    }
    if ($('#factor').val() === "") {
        mostrarMensaje("Llena los campos obligatorios de Impuesto.")
        $('#factor').css("border-color", "red");
        setTimeout(() => {
            $('#factor').css("border-color", "rgb(222, 226, 230)");
        }, 6000);
        return true;
    }
    return false;
}

function construirCardImpuesto(tipoImpuesto, claseImpuesto, tarifaTributo, factor) {
    return `
    <div class="col-md-3">
    <div class="card text-center">
    <div class="card-body cardImpu">
        <h5 class="card-title tituloImpuesto mb-4">${tipoImpuesto}</h5>
        <div class="row mb-2">
        <div class="col-md-6 text-end"><h6 class="card-title">Clase de Impuesto:</h6></div>
        <div class="col-md-6 text-start"><p class="card-text cardClaseImpu">${claseImpuesto}</p></div>
        </div>
        <div class="row mb-2">
        <div class="col-md-6 text-end"><h6 class="card-title">Tarifa Tributo:</h6></div>
        <div class="col-md-6 text-start"><p class="card-text cardTarifaTributo">${tarifaTributo}</p></div>
        </div>
        <div class="row">
        <div class="col-md-6 text-end"><h6 class="card-title">Factor:</h6></div>
        <div class="col-md-6 text-start"><p class="card-text cardFactor">${factor}</p></div>
        </div>
    </div>
    </div>
    </div>`;
}

function validarExistenciaImpuesto(impuesto, elemento) {
    if (elemento == impuesto) {
        $('.alert').text('No puedes repetir un impuesto.');
        $('.alert').css("display", "block");
        setTimeout(() => {
            $('.alert').css("display", "none");
        }, "5000");
        return false; /*Retorna false, osea que si se repite el impuesto*/
    }
    return true;
}
function validarCamposVaciosImpuestos(tarifa) {
    if (tarifa == "") {
        $('.alert').text('El campo Tarifa esta vacio.');
        $('.alert').css("display", "block");
        setTimeout(() => {
            $('.alert').css("display", "none");
        }, "5000");
        return false;
    }
    return true;
}


/**  Funcionalidad para agregar productos a la tabla  **/


$('.btn-aggProducto').on('click', function () {
    let campoNombreProducto = $('#nombreProducto');
    let campoPrecioUnitario = $('#precioUnitario');
    let campoRegalo = $('#esRegalo');
    let campoCantidad = $('#cantidad');
    let campoCodigoProducto = $('#codigoProducto');
    let campoUnidad = $('#unidad');
    let campoDescuento = $('#valorDescuento');
    let campoObservacion = $('#observacion');
    let tbody = $('.tProductos');

    let campos = [campoNombreProducto, campoPrecioUnitario, campoRegalo, campoCantidad, campoCodigoProducto, campoUnidad];
    if (!validarEspaciosVacios(campos)) return;
    if (validarCamposImpuestos()) return;

    tbody.append(`
        <tr>
        <th scope="row">${campoNombreProducto.val()}</th>
            <td>${campoPrecioUnitario.val()}</td>
            <td>${campoRegalo.val()}</td>
            <td>${campoCantidad.val()}</td>
            <td>${campoCodigoProducto.val()}</td>
            <td>${buscarEnArrayPorCodigo(campoUnidad.val(), unidad)}</td>
            <td>${campoDescuento.val()}</td>
            <td>${campoObservacion.val()}</td>
        </tr>")`
    );
    agregarItemsAFactura();
    agregarImpuestosAFactura();
    calcularTotal();

    // factura.items.cantidad = campoCantidad.val();
    // factura.items.codigoProducto = campoCodigoProducto.val();
    // factura.items.descripcion = campoNombreProducto.val();
    // factura.items.precioBaseUnitario = campoPrecioUnitario.val();
    // factura.items.unidadMedida = campoUnidad.val();
    // factura.items.esRegalo = campoRegalo.val();
    // factura.items.observacion = campoObservacion.val();
});


// function validarImpuestoCreados() {
//     if ($('#cardsImpuesto').children().length == 0) {
//         activarAlertProductos($('.alert'), 'Debes agregar al menos un impuesto antes de agregar productos.');
//         return;
//     }
// }

function validarEspaciosVacios(campos) {
    let esVacio = true;
    for (const campo of campos) {
        if (campo.val() == "") {
            mostrarMensaje('El campo ' + campo.attr('placeholder') + ' no puede estar vacio.');
            campo.css("border-color", "red");
            setTimeout(() => {
                campo.css("border-color", "rgb(222, 226, 230)");
            }, 6000);
            esVacio = false;
        }
    }
    return esVacio;
}

function activarAlertProductos(alertIndicator, mensaje) {
    alertIndicator.text(mensaje).fadeIn();
    setTimeout(() => {
        alertIndicator.fadeOut();
    }, 5000);
}

function buscarEnArrayPorCodigo(parametro, array) {
    for (const objeto of array) {
        if (objeto.codigo == parametro) {
            return objeto.nombre;
        }
    }
}

/**  Funcionalidad para conectar a la API y enviar los datos de la factura  **/
const apiURL = 'https://pru.clarisacloud.com:8443/api/factura/rest/v1/factura/nacional';

$('.btn-enviar').on("click", function () {

    validarCamposTodos();
    // 🔹 Datos principales de la factura
    factura.nit = $('#nit').val();
    factura.numeroResolucion = $('#num-resolucion').val();
    factura.consecutivoDcto = $('#consecutivoDcto').val();
    factura.prefijoDcto = $('#prefijoDcto').val();
    factura.fechaVencimiento = $('#fechaVencimiento').val();
    factura.formaPago = $('#formaPago').val();
    factura.mediosPago = [
        $('#mediosPago').val()
    ];
    factura.observacion = $('#observacionDescuentosCargos').val();
    factura.total = parseFloat($('#total').val());

    // 🔹 Datos del cliente
    factura.cliente = {};
    factura.cliente.nombreRazonSocial = $('#nombreRazonSocial').val();
    factura.cliente.tipoIdentificacion = $('#tipoIdentificacion').val();
    factura.cliente.numIdentificacion = parseInt($('#numIdentificacion').val());
    factura.cliente.naturaleza = $('#naturaleza').val();
    factura.cliente.email = $('#email').val();
    factura.cliente.respFiscales = $('#responsabilidadesFiscales').val();
    factura.cliente.respTributarias = $('#respTributarias').val();
    factura.cliente.direccion = $('#direccion').val();
    factura.cliente.ciudad = $('#ciudad').val();
    factura.cliente.telefono = $('#telefono').val();

    console.log(factura);

    console.log(factura);
    console.log(JSON.stringify(factura));
    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(factura)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (!data.success) {
                for (const error of data.data.errores) {
                    mostrarMensaje(error.errorMessage);
                }
                // $(".alert").text(data.errores.errores[0].errorMessage);
            }
            console.log('Success:', data);
            // alert('Factura enviada exitosamente.');
        })
        .catch((errores) => {
            // console.error('Error:', error);
            mostrarMensaje(errores);
        });
})


function validarCamposTodos() {
    let camposVacios = false;
    let inpusForm = document.querySelectorAll("input");
    for (const input of inpusForm) {
        if (!(input.id == "nombreProducto" || input.id == "precioUnitario" || input.id == "cantidad" || input.id == "codigoProducto" || input.id == "valorDescuento" || input.id == "observacion" || input.id == "tarifaTributo")) {
            if (input.value.trim() === "") {
                camposVacios = true;
                $(`#${input.id}`).css("border-color", "red");
                setTimeout(() => {
                    $(`#${input.id}`).css("border-color", "rgb(222, 226, 230)");
                }, 6000)
            }
        }
    }
    if (camposVacios) mostrarMensaje(`Campos Obligatorios vacios`);
}


function agregarItemsAFactura() {
    if (!factura.items) factura.items = [];
    factura.items.push({
        codigo: $('#codigoProducto').val(),
        nombreItem: $('#nombreProducto').val(),
        precioBaseUnitario: parseFloat($('#precioUnitario').val()),
        valorDescuento: parseFloat($('#valorDescuento').val()),
        cantidad: parseInt($('#cantidad').val()),
        observacion: $('#observacionProducto').val(),
        unidad: $('#unidad').val(),
    });
    $('#nombreProducto').val("");
    $('#precioUnitario').val("");
    $('#cantidad').val("");
    $('#codigoProducto').val("");
    $('#valorDescuento').val("0");


}

function agregarImpuestosAFactura() {
    let impuestosArray = $('.cardImpu');
    let lengthItems = factura.items.length;
    if (!factura.items[lengthItems - 1].impuestos) factura.items[lengthItems - 1].impuestos = [];
    for (const impuesto of impuestosArray) {
        factura.items[lengthItems - 1].impuestos.push({
            tipo: impuesto.querySelector(".tituloImpuesto").textContent,
            claseImpuesto: impuesto.querySelector(".cardClaseImpu").textContent,
            tarifaTributo: parseFloat(impuesto.querySelector(".cardTarifaTributo").textContent),
            factor: impuesto.querySelector(".cardFactor").textContent
        });
        console.log("Agregan impuestos" + factura);
    }
    $('#cardsImpuesto').empty();
}




// factura.nit = $('#nit').val();
// factura.numeroResolucion = $('#numeroResolucion').val();
// factura.consecutivoDcto = $('#consecutivoDcto').val();
// factura.prefijoDcto = $('#prefijoDcto').val();
// factura.fechaVencimiento = $('#fechaVencimiento').val();
// factura.formaPago = $('#formaPago').val();
// factura.mediosPago = $('#mediosPago').val();
// factura.total = $('#total').val();
// factura.observacion = $('#observacion').val();
// factura.cliente.nombreRazonSocial = $('#nombreRazonSocial').val();
// factura.cliente.tipoIdentificacion = $('#tipoIdentificacion').val();
// factura.cliente.numIdentificacion = $('#numIdentificacion').val();
// factura.cliente.naturaleza = $('#naturaleza').val();
// factura.cliente.email = $('#email').val();
// factura.cliente.responsabilidadesFiscales = $('#responsabilidadesFiscales').val();
// factura.cliente.respTributarias = $('#respTributarias').val();
// factura.cliente.direccion = $('#direccion').val();
// factura.cliente.ciudad = $('#ciudad').val();
// factura.cliente.telefono = $('#telefono').val();

function mostrarMensaje(mensaje) {
    $('.alertaGlobal').fadeIn(400);
    $('.alertaGlobal').append(`<div class="alert alert-danger my-3 alertDangerItems" id="alert${contadorAlert++}">${mensaje}</div>`).css("font-weight", "bold");
    setTimeout(() => {
        $('.alertaGlobal').fadeOut(400, function () {
            $(this).empty();
        });
    }, 6000);
}

/** Calcular el total **/
function calcularTotal() {
    let total = 0;
    for (const item of factura.items) {
        let totalProducto = 0;
        if (item.esRegalo == false) totalProducto = item.precioBaseUnitario * item.cantidad;
        let impuestoTotal = 0;
        for (const impuesto of item.impuestos) {
            impuestoTotal += (impuesto.tarifaTributo / 100) * totalProducto;
        }
        total += totalProducto + impuestoTotal;
    }
    $('#total').val(total);
}


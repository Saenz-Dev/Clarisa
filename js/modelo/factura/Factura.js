class Item {
    constructor(nombreItemVenta, precioBaseUnitario, esRegalo, cantidad, codigo, unidad, valorDescuento, observacion, impuestos) {
        this.nombreItemVenta = nombreItemVenta;
        this.precioBaseUnitario = precioBaseUnitario;
        this.esRegalo = esRegalo;
        this.cantidad = cantidad;
        this.codigo = codigo;
        this.unidad = unidad;
        this.valorDescuento = valorDescuento;
        this.observacion = observacion;
        this.impuestos = [impuestos];
    }
}

class Impuesto {
    constructor(tipo, claseImpuesto, tarifaTributaria, factor) {
        this.tipo = tipo;
        this.claseImpuesto = claseImpuesto;
        this.tarifaTributaria = tarifaTributaria;
        this.factor = factor;
    }
}

class Cliente {
    constructor(nombreRazonSocial, tipoIdentificacion, numIdentificacion, naturaleza, direccion, ciudad, telefono, email, responsabilidadesFiscales, respTributarias) {
        this.nombreRazonSocial = nombreRazonSocial;
        this.tipoIdentificacion = tipoIdentificacion;
        this.numIdentificacion = numIdentificacion;
        this.naturaleza = naturaleza;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.email = email;
        this.responsabilidadesFiscales = responsabilidadesFiscales;
        this.respTributarias = respTributarias;
    }
}

class Extension {
    constructor(beneficiosComprador, puntoVenta) {
        this.beneficiosComprador = beneficiosComprador;
        this.puntoVenta = puntoVenta;
    }
}

class PuntoVenta {
    constructor(placaCaja, ubicacionCaja, cajero, tipoCaja, codigoVenta, subtotal) {
        this.placaCaja = placaCaja;
        this.ubicacionCaja = ubicacionCaja;
        this.cajero = cajero;
        this.tipoCaja = tipoCaja;
        this.codigoVenta = codigoVenta;
        this.subtotal = subtotal;
    }
}

class BeneficioComprador {
    constructor(codigo, nombreApelldo, puntos) {
        this.codigo = codigo;
        this.nombreApelldo = nombreApelldo;
        this.puntos = puntos;
    }
}

class ListaDescuentosCargos {
    constructor(tipo, codigo, observacion, valor) {
        this.tipo = tipo;
        this.codigo = codigo;
        this.observacion = observacion;
        this.valor = valor;
    }
}

export class Factura {
    constructor(nit, numeroResolucion, prefijoDcto, consecutivoDcto, fechaVencimiento, mediosPago, formaPago, observacion, total) {
        this.nit = nit;
        this.numeroResolucion = numeroResolucion;
        this.prefijoDcto = prefijoDcto;
        this.consecutivoDcto = consecutivoDcto;
        this.fechaVencimiento = fechaVencimiento;
        this.mediosPago = mediosPago;
        this.formaPago = formaPago;
        this.beneficiosComprador = new BeneficioComprador();
        this.puntoVenta = new PuntoVenta();
        this.extensiones = new Extension();
        this.extensiones.beneficiosComprador = this.beneficiosComprador;
        this.extensiones.puntoVenta = this.puntoVenta;
        this.cliente = new Cliente();
        this.observacion = observacion;
        this.total = total;
        this.impuestos = new Impuesto();
        this.items = [new Item()];
        this.items[0].impuestos = this.impuestos;
        this.listaDescuentosCargos = new ListaDescuentosCargos();
    }
}
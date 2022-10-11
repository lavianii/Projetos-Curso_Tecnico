import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

class Tela2 extends StatefulWidget {
  String strIn = "oi";

  Tela2({
    super.key,
    this.strIn = "oi2",
  });

  @override
  State<Tela2> createState() => _Tela2State();
}

class _Tela2State extends State<Tela2> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Qr code gerado"),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const SizedBox(
              height: 15,
            ),
            Center(
              child: QrImage(
                data: widget.strIn,
                size: 400,
                version: QrVersions.auto,
                gapless: false,
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text("Voltar"),
            )
          ],
        ),
      ),
    );
  }
}

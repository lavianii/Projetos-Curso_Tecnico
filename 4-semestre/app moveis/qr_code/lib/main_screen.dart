import 'package:flutter/material.dart';
import 'tela2.dart';

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  final _controller = TextEditingController();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('QrCode'),
        centerTitle: true,
      ),
      body: Container(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const SizedBox(
              height: 15,
            ),
            TextFormField(
              controller: _controller,
              decoration: const InputDecoration(
                labelText: 'QrCode generator',
                border: OutlineInputBorder(),
                suffixIcon: Icon(Icons.ballot),
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => Tela2(strIn: _controller.text),
                    ),
                  );
                },
                child: const Text("Gerar"))
          ],
        ),
      ),
    );
  }
}

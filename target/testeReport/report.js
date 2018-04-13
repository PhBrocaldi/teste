$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CadastroCartao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gloureirog@indracompany.com"
    },
    {
      "line": 2,
      "value": "# encoding: iso-8859-1"
    }
  ],
  "line": 6,
  "name": "Registro de Tarjeta - Website Banco Ripley",
  "description": "\nYo como Analista de pruebas\nQuiero registrar una tarjeta",
  "id": "registro-de-tarjeta---website-banco-ripley",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@ProjetoBancoRipley"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Registro de tarjeta",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@CT001"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "CT01 - Acceder la Página principal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "CT01 - Acceda la página de tarjetas",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "CT01 - Añadir DNI \u003cdni\u003e válido",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "CT01 - Añadir Correo \u003ccorreo\u003e válido",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "CT01 - Clic en enviar",
  "keyword": "When "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;",
  "rows": [
    {
      "cells": [
        "dni",
        "correo"
      ],
      "line": 23,
      "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;1"
    },
    {
      "cells": [
        "\"123456\"",
        "\"indra@teste.com\""
      ],
      "line": 24,
      "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Registro de tarjeta",
  "description": "",
  "id": "registro-de-tarjeta---website-banco-ripley;registro-de-tarjeta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@ProjetoBancoRipley"
    },
    {
      "line": 12,
      "name": "@CT001"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "CT01 - Acceder la Página principal",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "CT01 - Acceda la página de tarjetas",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "CT01 - Añadir DNI \"123456\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "CT01 - Añadir Correo \"indra@teste.com\" válido",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "CT01 - Clic en enviar",
  "keyword": "When "
});
formatter.match({
  "location": "CadastroCartaoTest.acessarPaginaCadastro()"
});
formatter.result({
  "duration": 11299792330,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.realizaBusca()"
});
formatter.result({
  "duration": 9579777152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "CadastroCartaoTest.inserirDni(String)"
});
formatter.result({
  "duration": 8238094879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "indra@teste.com",
      "offset": 22
    }
  ],
  "location": "CadastroCartaoTest.inserirCorreo(String)"
});
formatter.result({
  "duration": 8153127879,
  "status": "passed"
});
formatter.match({
  "location": "CadastroCartaoTest.acessarTelaTipoAutorizacao()"
});
formatter.result({
  "duration": 7850340201,
  "status": "passed"
});
formatter.after({
  "duration": 1215810,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tFileUtils cannot be resolved\n\r\n\tat br.indra.gloureirog.core.BaseTest.finaliza(BaseTest.java:27)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});